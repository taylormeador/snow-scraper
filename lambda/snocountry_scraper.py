import sys
import logging
import pymysql
from bs4 import BeautifulSoup
import requests
from datetime import datetime
import dateutil.tz

logger = logging.getLogger()
logger.setLevel(logging.INFO)

try:
    conn = pymysql.connect(host=rds_host, user=name, passwd=password, db=db_name, connect_timeout=5)
except pymysql.MySQLError as e:
    logger.error("ERROR: Unexpected error: Could not connect to MySQL instance.")
    logger.error(e)
    sys.exit()
logger.info("SUCCESS: Connection to RDS MySQL instance succeeded")

today = datetime.now(tz=dateutil.tz.gettz('US/Mountain')).strftime('%Y-%m-%d')
def lambda_handler(event, context):
    URL = "https://www.snocountry.com/snow-reports/us/colorado"
    page = requests.get(URL)
    soup = BeautifulSoup(page.content, "html.parser")
    
    content = soup.find(id="sppb-addon-1572032128072")
    if not content:
        logger.fatal('Failed to collect page content. exiting')
        sys.exit()
    
    resorts = content.find_all('div', class_='resort-conditions')
    if not resorts:
        logger.fatal('Failed to find resort info. exiting')
        sys.exit()
    
    def get_snow_fall_info(resort_row):
        resort = resort_row.find('a', class_='resortcol-title').text
        resort_name = resort.split(',')[0].strip()
        resort_state = resort.split(',')[1].strip()
    
        snow_fall_div = resort_row.find('div', class_='snow-fall')
        amount = 0
        if snow_fall_div:
            snow_fall = snow_fall_div.find('div', class_='m-b-5')
            if snow_fall.p:
                for p in snow_fall.p:
                    words = p.strip().split(' ')
                    if words[0] == 'Snow':
                        continue
                    if words[2] == '24':
                        amount = int(words[0][:-1])
        return resort_name, resort_state, amount


    for resort_row in resorts:
        resort_name, resort_state, amount = get_snow_fall_info(resort_row)
        with conn.cursor() as cur:
            resorts_key_query = cur.execute('SELECT resorts_key FROM resorts_dim WHERE resort_name = %s AND resort_state = %s', (resort_name, resort_state))
            resorts_key = cur.fetchone()[0]
            if resorts_key:
                logger.info('Inserting snow report data %d, %s, %s, %d', resorts_key, resort_name, resort_state, amount)
                cur.execute("""
                INSERT INTO snocountry_reports (date, resorts_key, amount_inches) 
                VALUES (%s, %s, %s);
                """, (today, resorts_key, amount))
            else:
                logger.warning('Failed to find resorts_key for %s, %s', resort_name, resort_state)
    conn.commit()
    return "Snocountry script complete " + today


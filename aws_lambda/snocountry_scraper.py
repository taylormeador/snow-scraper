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

def get_snow_fall_info(resort_row):
    resort = resort_row.find('a', class_='resortcol-title').text
    resort_name = resort.split(',')[0].strip()
    snow_fall_div = resort_row.find('div', class_='snow-fall')
    if snow_fall_div:
        reports = snow_fall_div.find_all('p', class_='simple')
        return resort_name, reports
    return resort_name, 0

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

    for resort_row in resorts:
        resort_name, reports = get_snow_fall_info(resort_row)
        if not reports:
            logger.info('No data found for %s', resort_name)
            continue
        with conn.cursor() as cur:
            resorts_key_query = cur.execute('SELECT resorts_key FROM resorts_dim WHERE resort_name = %s', resort_name)
            resorts_key = cur.fetchone()[0]
            if resorts_key:
                for report in reports:
                    logger.info('Inserting snow report data %d, %s, %s', resorts_key, resort_name, report.text)
                    cur.execute("""
                    INSERT INTO snocountry_raw (date, resorts_key, data)
                    VALUES (%s, %s, %s);
                    """, (today, resorts_key, report.text))
            else:
                logger.warning('Failed to find resorts_key for %s', resort_name)
    conn.commit()
    return "Snocountry script complete " + today

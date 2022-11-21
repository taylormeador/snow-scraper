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
    

    def get_five_day_forecasted_amount(location):
        logger.info('Getting forecast for ' + location)
        page = requests.get('https://opensnow.com/location/' + location + '/forecast')
        soup = BeautifulSoup(page.content, 'html.parser')
        forecast = soup.find_all('span', {'class': ['tw-absolute', 'tw-inset-0', 'tw-block', 'tw-m-auto', 'tw-w-16']})
        if len(forecast):
            forecast_amount = int(forecast[0].text.strip()[:-1])
            logging.info('Success. Forecast for ' + location + ' = ' + str(forecast_amount))
            return forecast_amount
        logging.error('Unable to get forecast for ' + location)
        return None

    locations = {
        'arapahoebasin': 'Arapahoe Basin', 
        'aspenhighlands': 'Aspen Highlands', 
        'aspenmountain': 'Aspen Mountain',
        'beavercreek': 'Beaver Creek', 
        'bluebird': 'Bluebird Backcountry', 
        'breckenridge': 'Breckenridge', 
        'buttermilk': 'Buttermilk', 
        'skicooper': 'Cooper', 
        'copper': 'Copper Mountain', 
        'crestedbutte': 'Crested Butte', 
        'echomountain': 'Echo Mountain', 
        'eldora': 'Eldora', 
        'skigranby': 'Granby Ranch', 
        'hesperus': 'Hesperus Ski Area', 
        'irwin': 'Irwin', 
        'keystone': 'Keystone', 
        'loveland': 'Loveland', 
        'monarch': 'Monarch', 
        'powderhorn': 'Powderhorn', 
        'purgatory': 'Purgatory', 
        'silverton': 'Silverton Mountain', 
        'snowmass': 'Snowmass', 
        'steamboat': 'Steamboat', 
        'sunlight': 'Sunlight', 
        'telluride': 'Telluride', 
        'vail': 'Vail', 
        'winterpark': 'Winter Park', 
        'wolfcreekcolorado': 'Wolf Creek'
    }

    for location, resort_name in locations.items():
        forecast_amount = get_five_day_forecasted_amount(location)
        with conn.cursor() as cur:
            resorts_key_query = cur.execute('SELECT resorts_key FROM resorts_dim WHERE resort_name = %s AND resort_state = %s', (resort_name, 'CO'))
            resorts_key = cur.fetchone()[0]
            if resorts_key and forecast_amount is not None:
                logger.info('Inserting forecast data %d, %s, %d', resorts_key, resort_name, forecast_amount)
                cur.execute("""
                INSERT INTO opensnow_forecasts (date, resorts_key, amount_inches) 
                VALUES (%s, %s, %s);
                """, (today, resorts_key, forecast_amount))
            else:
                logger.warning('Failed to find resorts_key for %s, %s', resort_name)
    conn.commit()
    
    return "Opensnow script complete " + today

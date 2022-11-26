import requests
import json
import os
import sys
import logging
import pymysql
from datetime import datetime
import dateutil.tz

APP_ID = os.environ['APP_ID']

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
    def get_snow_forecast(lat, lon):
        API_URL = 'https://api.openweathermap.org/data/3.0/onecall'
        params = {'lat': lat, 'lon': lon, 'appid': APP_ID}
        logger.info('Getting forecast data from API')
        response = requests.get(API_URL, params=params)
        if response.status_code != 200:
            logger.error('Error with API response')
            sys.exit()
        text = json.loads(response.text)
        daily = text['daily']
        snow_amounts = []
        for day in daily:
            if 'snow' in day:
                snow_amounts.append(day['snow'])  # snow amount forecasted in mm
            else:
                snow_amounts.append(0)
        logger.info('Forecast retrieved from API')
        return snow_amounts
    
    with conn.cursor() as cur:
        cur.execute('SELECT resort_name, lat, lon FROM resorts_dim;')
        for record in cur.fetchall():
            if record[1] and record[2]: 
                forecast = get_snow_forecast(record[1], record[2])
                resorts_key_query = cur.execute('SELECT resorts_key FROM resorts_dim WHERE resort_name = %s AND resort_state = %s', (record[0], 'CO'))
                resorts_key = cur.fetchone()[0]
                if resorts_key:
                    logger.info('Inserting forecast data for resorts_key=' + str(resorts_key))
                    cur.execute('INSERT INTO openweather_forecasts (resorts_key, date, day_0, day_1, day_2, day_3, day_4, day_5, day_6, day_7) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s);', (resorts_key, today, str(forecast[0]), str(forecast[1]), str(forecast[2]), str(forecast[3]), str(forecast[4]), str(forecast[5]), str(forecast[6]), str(forecast[7])))
                else:
                    logger.warning('Unable to find resort key')
        conn.commit()
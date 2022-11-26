import json
import logging
import pymysql
import sys

logger = logging.getLogger()
logger.setLevel(logging.INFO)

try:
    conn = pymysql.connect(host=rds_host, user=name, passwd=password, db=db_name, connect_timeout=5)
except pymysql.MySQLError as e:
    logger.error("ERROR: Unexpected error: Could not connect to MySQL instance.")
    logger.error(e)
    sys.exit()
logger.info("SUCCESS: Connection to RDS MySQL instance succeeded")

def lambda_handler(event, context):
    resort = event['resort']
    date = event['date']
    if not resort or not date:
        logger.error('Problem getting query parameters')
        sys.exit()
        
    with conn.cursor() as cur:
        # get resort info
        cur.execute('SELECT resorts_key, lat, lon FROM resorts_dim WHERE resort_name = %s;', (resort))
        try:
            resorts_key, lat, lon = cur.fetchone()
        except TypeError as e:
            logger.error('Could not get resorts_dim record')
            logger.error(e)
            sys.exit()
            
        # get forecasts and reports for resort/date
        cur.execute('SELECT amount_inches FROM snocountry_reports WHERE resorts_key = %s AND date = %s', (resorts_key, date))
        try:
            snocountry_report = cur.fetchone()[0]
        except IndexError as e:
            logger.error('Problem getting snocountry data')
            logger.error(e)
            snocountry_report = None
        
        cur.execute('SELECT amount_inches FROM opensnow_forecasts WHERE resorts_key = %s AND date = %s', (resorts_key, date))
        try:
            opensnow_forecast = cur.fetchone()[0]
        except IndexError as e:
            logger.error('Problem getting opensnow data')
            logger.error(e)
            opensnow_forecast = None
        
        cur.execute('SELECT day_0, day_1, day_2, day_3, day_4, day_5, day_6, day_7 FROM openweather_forecasts WHERE resorts_key = %s AND date = %s', (resorts_key, date))
        openweather_forecasts = cur.fetchone()

        # https://snow-stake-images-s3.s3.us-east-2.amazonaws.com/beaver_creek/snow-stake-2022-11-13.jpg
        snow_stake_url = 'https://snow-stake-images-s3.s3.us-east-2.amazonaws.com/' + resort.lower().replace(' ', '_') + '/snow-stake-' + date + '.jpg'
        
    response_body = {
        'resort': resort,
        'date': date,
        'reported': snocountry_report,
        'OpenSnow-5-day': opensnow_forecast,
        'OpenWeather-7-day': openweather_forecasts,
        'snow-stake-img-url': snow_stake_url
    }
    
    response = {
        'statusCode': 200,
        'headers': {'Content-Type': 'application/json'},
        'body': response_body
    }
    
    
    return response
        
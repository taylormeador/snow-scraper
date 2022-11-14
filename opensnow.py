import requests
from bs4 import BeautifulSoup
import logging
from datetime import date
from db import DB

# logger setup
logging.basicConfig(filename='log.log', encoding='utf-8', level=logging.DEBUG, format='%(asctime)s %(message)s')
logging.info('Starting snocountry_scraper script')

db = DB()

def get_five_day_forecasted_amount(location):
    logging.info('Getting forecast for ' + location)
    page = requests.get('https://opensnow.com/location/' + location + '/forecast')
    soup = BeautifulSoup(page.content, 'html.parser')
    forecast = soup.find_all('span', {'class': ['tw-absolute', 'tw-inset-0', 'tw-block', 'tw-m-auto', 'tw-w-16', 'lg:tw-w-28', 'tw-px-4']})
    if len(forecast):
        forecast_amount = int(forecast[0].text.strip()[:-1])
        logging.info('Success. Forecast for ' + location + ' = ' + str(forecast_amount))
        return forecast_amount
    logging.error('Unable to get forecast for ' + location)
    return None

date = date.today()
locations = {'arapahoebasin': 'Arapahoe Basin', 
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
    'wolfcreekcolorado': 'Wolf Creek'}


def driver():
    for location, resort_name in locations.items():
        forecast_amount = get_five_day_forecasted_amount(location)
        resorts_key = db.get_resorts_key(resort_name, 'CO')
        if resorts_key and forecast_amount is not None:
            logging.info('Upserting forecast data %d, %s, %d', resorts_key, resort_name, forecast_amount)
            db.cur.execute("""
            INSERT INTO opensnow_forecasts (date, resorts_key, amount_inches) 
            VALUES (%s, %s, %s) 
            ON CONFLICT (date, resorts_key) 
            DO UPDATE SET amount_inches = EXCLUDED.amount_inches;
            """, (date, resorts_key, forecast_amount))
        else:
            logging.warning('Failed to find resorts_key for %s, %s', resort_name)
    db.conn.commit()

if __name__ == '__main__':
    driver()

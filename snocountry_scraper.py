from bs4 import BeautifulSoup
import requests
from db import DB
from datetime import date
import sys
import logging

# logger setup
logging.basicConfig(filename='log.log', encoding='utf-8', level=logging.DEBUG, format='%(asctime)s %(message)s')
logging.info('Starting snocountry_scraper script')

# initialize db connection
db = DB()

# This script scrapes info about the amount of snow each resort received in the past 24 hours
# and inserts the info to a database for further analysis
URL = "https://www.snocountry.com/snow-reports/us/colorado"  # TODO expand this to other states
page = requests.get(URL)
soup = BeautifulSoup(page.content, "html.parser")

content = soup.find(id="sppb-addon-1572032128072")
if not content:
    logging.fatal('Failed to collect page content. exiting')
    sys.exit()

resorts = content.find_all('div', class_='resort-conditions')
if not resorts:
    logging.fatal('Failed to find resort info. exiting')
    sys.exit()

def get_snow_fall_info(resort_row):
    resort = resort_row.find('a', class_='resortcol-title').text
    resort_name = resort.split(',')[0].strip()
    resort_state = resort.split(',')[1].strip()

    snow_fall_div = resort_row.find('div', class_='snow-fall')
    amount = 0
    if snow_fall_div:
        snow_fall = snow_fall_div.find('div', class_='m-b-5')
        for p in snow_fall.p:
            words = p.strip().split(' ')
            if words[0] == 'Snow':
                continue
            if words[2] == '24':
                amount = int(words[0][:-1])
    return resort_name, resort_state, amount

def driver():
    date = date.today()
    for resort_row in resorts:
        resort_name, resort_state, amount = get_snow_fall_info(resort_row)
        resorts_key = db.get_resorts_key(resort_name, resort_state)
        if resorts_key:
            logging.info('Upserting data %d, %s, %s, %d', resorts_key, resort_name, resort_state, amount)
            db.cur.execute("""
            INSERT INTO snow_fall (date, resorts_key, amount_inches) 
            VALUES (%s, %s, %s) 
            ON CONFLICT (date, resorts_key) 
            DO UPDATE SET amount_inches = EXCLUDED.amount_inches;
            """, (date, resorts_key, amount))
        else:
            logging.warning('Failed to find resorts_key for %s, %s', resort_name, resort_state)
    db.conn.commit()

driver()

from bs4 import BeautifulSoup
import requests
from db import DB

# initialize db connection
db = DB()

# This script scrapes info about the amount of snow each resort in CO received in the past 24 hours
# eventually it will insert this info into a database which can be used for analysis
URL = "https://www.snocountry.com/snow-reports/us/colorado"  # TODO expand this to other states
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")
content = soup.find(id="sppb-addon-1572032128072")

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

resorts = content.find_all('div', class_='resort-conditions')
for resort_row in resorts:
    print(get_snow_fall_info(resort_row))

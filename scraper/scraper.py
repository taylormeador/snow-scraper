from bs4 import BeautifulSoup
import requests

# This script scrapes info about the amount of snow each resort in CO received in the past 24 hours
# eventually it will insert this info into a database which can be used for analysis
URL = "https://www.snocountry.com/snow-reports/us/colorado"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")
content = soup.find(id="sppb-addon-1572032128072")

resorts = content.find_all('div', class_='resort-conditions')
for resort_row in resorts:
    resort = resort_row.find('a', class_='resortcol-title').text
    resort_name = resort.split(',')[0].strip()
    resort_state = resort.split(',')[1].strip()

    snow_fall_div = resort_row.find('div', class_='snow-fall')
    if snow_fall_div:
        snow_fall = snow_fall_div.find('div', class_='m-b-5')
        for p in snow_fall.p:
            words = p.strip().split(' ')
            if words[0] == 'Snow':
                continue
            amount = int(words[0][:-1]) if words[2] == '24' else 0
    print(resort_name + ',', resort_state, amount)


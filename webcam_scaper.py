import requests
from bs4 import BeautifulSoup
from PIL import Image, UnidentifiedImageError 
from datetime import datetime
import logging

# logger setup
logging.basicConfig(filename='log.log', encoding='utf-8', level=logging.DEBUG, format='%(asctime)s %(message)s')
logging.info('Starting snocountry_scraper script')

# urls hosting images of snowstakes
breck_url = 'https://common.snow.com/Mtncams/BreckSnowStake.am.jpg'
vail_url = 'https://common.snow.com/Mtncams/VailSnowStake.am.jpg'
beaver_creek_url = 'https://common.snow.com/Mtncams/BCSnowStake.am.jpg'
crested_butte_url = 'https://common.snow.com/Mtncams/CBSnowStake.am.jpg'
keystone_url = 'https://cache.snow.com/Mtncams/KeySnowStake.jpg'

# loop through and download images for later analysis
snow_stake_urls = [breck_url, vail_url, beaver_creek_url, crested_butte_url, keystone_url]
file_names = ['breck', 'vail', 'beaver_creek', 'crested_butte', 'keystone']
for i in range(len(snow_stake_urls)):
    logging.info('Getting snow stake image for ' + file_name)
    url = snow_stake_urls[i]
    file_name = file_names[i]
    now = f'{datetime.now():%Y-%m-%d_%H-%M-%S%z}'
    try:
        img = Image.open(requests.get(url, stream=True).raw)
    except UnidentifiedImageError as e:
        logging.exception('Couldn\'t get image for ' + file_name)
    img.save('./snow-stake-images/' + file_name + '/snow-stake-' + now + '.jpg')
import requests
from bs4 import BeautifulSoup
from datetime import datetime
import logging
import boto3
from datetime import datetime
import dateutil.tz

# logger setup
logger = logging.getLogger()
logger.setLevel(logging.INFO)

def lambda_handler(event, context):
    # urls hosting images of snowstakes
    breckenridge_url = 'https://common.snow.com/Mtncams/BreckSnowStake.am.jpg'
    vail_url = 'https://common.snow.com/Mtncams/VailSnowStake.am.jpg'
    beaver_creek_url = 'https://common.snow.com/Mtncams/BCSnowStake.am.jpg'
    crested_butte_url = 'https://common.snow.com/Mtncams/CBSnowStake.am.jpg'
    keystone_url = 'https://cache.snow.com/Mtncams/KeySnowStake.jpg'
    
    # loop through and download images for later analysis
    snow_stake_urls = [breckenridge_url, vail_url, beaver_creek_url, crested_butte_url, keystone_url]
    file_names = ['breckenridge', 'vail', 'beaver_creek', 'crested_butte', 'keystone']
    now = datetime.now(tz=dateutil.tz.gettz('US/Mountain')).strftime('%Y-%m-%d')
    for i in range(len(snow_stake_urls)):
        url = snow_stake_urls[i]
        file_name = file_names[i]
        logger.info('Getting snow stake image for ' + file_name)
        response = requests.get(url)
        img = response.content
        
        bucket_name = "snow-stake-images-s3"
        file_name = file_name + '/snow-stake-' + now + '.jpg'
        s3 = boto3.resource("s3")
        s3.Bucket(bucket_name).put_object(Key=file_name, Body=img)
        
    return "Webcam scraper script complete", 

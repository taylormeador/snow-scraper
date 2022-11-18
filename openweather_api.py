import requests
import json
from config import APP_ID


def get_snow_forecast(lat, lon):
    API_URL = 'https://api.openweathermap.org/data/3.0/onecall'
    params = {'lat': lat, 'lon': lon, 'appid': APP_ID}
    response =  requests.get(API_URL, params=params)
    text = json.loads(response.text)
    daily = text['daily']
    snow_amounts = []
    for day in daily:
        if 'snow' in day:
            snow_amounts.append(day['snow'])  # snow amount forecasted in mm
        else:
            snow_amounts.append(0)
    return snow_amounts

print(get_snow_forecast(42.971965, -78.851935))
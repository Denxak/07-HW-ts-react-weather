import { useState } from 'react';
import Form from './Form'
import Weather from './Weather'
import { api_key, base_url } from '../utils/constant'
import { ApiResponse, WeatherInfo } from '../utils/types';

function Data() {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>()
  const [message, setMessage] = useState('Enter city name')

  const getWeather = async (city: string) => {
    try {
      const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
      const data: ApiResponse = await response.json()
      const info: WeatherInfo = {
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        pressure: data.main.pressure,
        sunset: data.sys.sunset
      }
      setWeatherInfo(info);
      setMessage('')
    } catch (e) {
      setMessage('Enter correct city name')
    }
  }

  return (
    <div>
      <Form getWeather={getWeather} />
      <Weather weather={weatherInfo || {} as WeatherInfo} message={message} />
    </div>
  )
}

export default Data

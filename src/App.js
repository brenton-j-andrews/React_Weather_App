import React, { useDebugValue, useEffect, useState } from "react";
import axios from "axios";


// Import components and CSS.
import * as util from "./Util/utilities";
import BasicWeather from "./components/BasicWeather";
import DetailedWeather from "./components/DetailedWeather";
import Forecast from "./components/Forecast";
import './css/App.css';


// Dummy data for display purposes if API call fails.
const dummy_data = {
  'name': 'Salt Lake City',
  'sys': {
    'country': 'US',
  },
  'dt': Math.floor(Date.now() / 1000),
  'main': {
    'temp': 73
  },
  'weather': [
    {
      'main': 'Clouds',
      'icon': '04d'
    }
  ]
}

let api_key = '40117561b027d65aef26e6f9f3621abe';

// https://api.openweathermap.org/data/2.5/onecall?lat=40.7608&lon=-111.8911&units=imperial&appid=40117561b027d65aef26e6f9f3621abe

const App = () => {

  let city = "Salt Lake City";
  const units = "imperial";
  const [ toggleForecast, setToggleForecast ] = useState(false);
  const [ currentWeather, setCurrentWeather ] = useState();
  const [ forecastWeather, setForecastWeather] =  useState();

  let current_weather_key = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${api_key}`;

  useEffect(() => {
    axios.get(current_weather_key)

    .then(response => {
      setCurrentWeather(response.data);
      return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&units=imperial&appid=40117561b027d65aef26e6f9f3621abe`)
    })

    .then((response) => {
      let sanitized_data = response.data.daily.slice(0, -1);
      setForecastWeather(sanitized_data);
    })
  
  }, [])

  if (currentWeather && forecastWeather) {

    return (
      <div className='App-wrapper'>

        {currentWeather && (
          <div className="Upper-wrappper">
            <BasicWeather 
            data = { currentWeather } 
            /> 
            <DetailedWeather  
            toggle = { toggleForecast}
            data = { currentWeather }
            />
          </div>
        )}

        <Forecast 
        data = { forecastWeather }
        />

    </div>
  )}
}

export default App;

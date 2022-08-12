import React, { useEffect, useState } from "react";
import axios from "axios";

// Import components and CSS.
import BasicWeather from "./components/BasicWeather";
import DetailedWeather from "./components/DetailedWeather";
import Forecast from "./components/Forecast";
import './css/App.css';

let api_key = '40117561b027d65aef26e6f9f3621abe';

const App = () => {

  let city = "Salt Lake City";
  const units = "imperial";
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

      let data = {
        'daily': response.data.daily.slice(0, -1),
        'hourly': response.data.hourly.slice(0, 12)
      }
      console.log(data);
      setForecastWeather(data);
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

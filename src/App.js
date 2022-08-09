import React, { useDebugValue, useEffect, useState } from "react";
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
  const [ coords, setCoords ] = useState({});
  const [ currentWeather, setCurrentWeather ] = useState();
  const [ forecastWeather, setForecastWeather] =  useState();

  let current_weather_key = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${api_key}`;


  useEffect(() => {
    axios.get(current_weather_key)

    .then(response => {
      setCurrentWeather(response.data);
      setCoords(response.data.coord);
      console.log(response.data.coord);
      return axios.get(`http://api.openweathermap.org/data/2.5/forecast?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&appid=40117561b027d65aef26e6f9f3621abe`);
    })

    .then((response) => {
      // Sanitize response data to extract 1200 forecase for next 5 days.
      let sanitized_data = response.data.list
      setForecastWeather(response.data.list);
      console.log(response.data.list);
    })
  
  }, [])
  // api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}

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

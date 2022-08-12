import React, { useEffect, useState } from "react";
import axios from "axios";

// Import components and CSS.
import BasicWeather from "./components/BasicWeather";
import DetailedWeather from "./components/DetailedWeather";
import Forecast from "./components/Forecast";
import './css/App.css';

let api_key = '40117561b027d65aef26e6f9f3621abe';

const App = () => {

  const [ unitToggle, setUnitToggle ] = useState(false);
  const [ searchCity, setSearchCity] = useState("Boston")
  const [ currentWeather, setCurrentWeather ] = useState();
  const [ forecastWeather, setForecastWeather] =  useState();

  const units = unitToggle ? "imperial" : "metric"

  // Change searchCity value from form in BasicWeather component.
  const searchSubmit = (searchValue) => {
    setSearchCity(searchValue);
  }

  // Construct initial API key.
  let current_weather_key = `http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=${units}&APPID=${api_key}`;

  useEffect(() => {
    axios.get(current_weather_key)

    .then(response => {
      setCurrentWeather(response.data);
      return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.coord.lat}&lon=${response.data.coord.lon}&units=${units}&appid=40117561b027d65aef26e6f9f3621abe`)
    })

    .then((response) => {

      let data = {
        'daily': response.data.daily.slice(0, -1),
        'hourly': response.data.hourly.slice(0, 12)
      }
      setForecastWeather(data);
    })
  
  }, [searchCity, unitToggle])

  if (currentWeather && forecastWeather) {

    return (
      <div className='App-wrapper'>

        {currentWeather && (
          <div className="Upper-wrappper">

            <BasicWeather 
            data = { currentWeather } 
            searchSubmit = { searchSubmit }
            unitToggle = { unitToggle }
            setUnitToggle = { setUnitToggle }
            /> 

            <DetailedWeather  
            data = { currentWeather }
            unitToggle = { unitToggle }
            />
          </div>
        )}

        <Forecast 
        data = { forecastWeather }
        unitToggle = { unitToggle }
        />

    </div>
  )}
}

export default App;

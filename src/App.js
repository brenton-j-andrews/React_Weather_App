import React, { useEffect, useState } from "react";


// Import components and CSS.
import BasicWeather from "./components/BasicWeather";
import DetailedWeather from "./components/DetailedWeather";
import './css/App.css';


let api_key = '40117561b027d65aef26e6f9f3621abe';


const App = () => {

  let city = "Salt Lake City";
  const units = ["imperial", "metric"];
  let current_weather_key = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units[0]}&APPID=${api_key}`;

  const [ currentWeather, setCurrentWeather ] = useState();

  function FetchCurrentWeather() {
    useEffect(() => {
      async function fetchCurrentWeatherData() {
        const response = await fetch(current_weather_key);
        const fetchedData = await response.json();
        setCurrentWeather(fetchedData);
      }

      fetchCurrentWeatherData();
    }, []);
  }

  FetchCurrentWeather();





  if (currentWeather) {
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

    </div>
  )}
}

export default App;

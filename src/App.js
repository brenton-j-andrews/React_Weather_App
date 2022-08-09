import React, { useEffect, useState } from "react";


// Import components and CSS.
import BasicWeather from "./components/BasicWeather";
import DetailedWeather from "./components/DetailedWeather";
import './css/App.css';

let city = "Boston";
let units = ["imperial", "metric"];


const key = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units[0]}&APPID=40117561b027d65aef26e6f9f3621abe`;


const App = () => {

  console.log(process.env.API_KEY);
  const [currentWeather, setCurrentWeather ] = useState();

  const fetchCurrentWeather = async() => {
    const response = await fetch(key);
    if (!response.ok) {
        throw new Error('Data could not be fetched.')
    } else {
        return response.json();
    }
  }

  useEffect(() => {
    fetchCurrentWeather()
    .then((res) => {
        console.log(res);
        setCurrentWeather(res);
    })
    .catch((e) => {
        console.log(e.message)
    })
  }, [])


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

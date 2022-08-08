import React, { useEffect, useState } from "react";
import env from "react-dotenv";
import { useAsync } from "react-async";
import Axios from "axios";

// Import components and CSS.
import BasicWeather from "./components/BasicWeather";
import DetailedWeather from "./components/DetailedWeather";
import Forecast from "./components/Forecast";
import './css/App.css';

let unit = "imperial";
let city = "Boston";
let api_url_current = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=${env.API_KEY}`;



const App = () => {

  const [data, setData ] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const fetchData = async() => {
    const response = await Axios(api_url_current, { mode: 'cors' });
    setData(response.data);
  }


  
  return (
      <div className='App-wrapper'>
        <div className="Upper-wrappper">
          { data && <BasicWeather data = { data } /> }
     
          
          <DetailedWeather />
        </div>
    </div>
  )
}

export default App;

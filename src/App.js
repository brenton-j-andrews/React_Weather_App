import React, { useEffect, useState } from "react";


// Import components and CSS.
import BasicWeather from "./components/BasicWeather";
import DetailedWeather from "./components/DetailedWeather";
import './css/App.css';

const key = "http://api.openweathermap.org/data/2.5/weather?q=Boston&units=imperial&APPID=40117561b027d65aef26e6f9f3621abe";


const App = () => {

  const [data, setData ] = useState();

  const fetchData = async() => {
    console.log("am i here");
    const response = await fetch(key);
    if (!response.ok) {
        throw new Error('Data could not be fetched.')
    } else {
        return response.json();
    }
  }

  useEffect(() => {
    fetchData()
    .then((res) => {
        console.log(res);
        setData(res);
    })
    .catch((e) => {
        console.log(e.message)
    })
  }, [])


  if (data) {
    return (
      <div className='App-wrapper'>
        <div className="Upper-wrappper">
          {data && (
            <BasicWeather data = { data } /> )
          }

          <DetailedWeather />
        </div>
    </div>
  )
  }
}

export default App;

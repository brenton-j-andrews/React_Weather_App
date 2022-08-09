import React, { useState, useEffect } from 'react'


const key = "http://api.openweathermap.org/data/2.5/weather?q=Boston&units=imperial&APPID=40117561b027d65aef26e6f9f3621abe"


export default function Test() {
    const [data, setData] = useState();

    const fetchData = async() => {
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
    

    return (
        <div>
            <h1> Example!!! </h1>
            {data && (
                <h1> There is data??? </h1>
            )}
        </div>
    )
}




// JUNKYARD!!!

// const fetchCurrentWeather = async() => {
  //   const response = await fetch(current_weather_key);
  //   console.log(response);
  //   if (!response.ok) {
  //       throw new Error('Data could not be fetched.')
  //   } else {
  //       return response.json();
  //   }
  // }

  // // Use effect for current weather data.
  // useEffect(() => {
  //   fetchCurrentWeather()
  //   .then((res) => {
  //       console.log(res);
  //       setCurrentWeather(res);
  //   })
  //   .catch((e) => {
  //       console.log(e.message)
  //   })
  // }, [])

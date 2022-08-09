import React from "react";
import styled from "styled-components";

// Import images.
import wind_icon  from "../Assets/Images/wind.png";
import humidity_icon from "../Assets/Images/humidity.png";
import rain_icon  from "../Assets/Images/rain.png";

const DetailedWeatherDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 15px;
`

const WeatherBox = styled.div`
    
`

const DetailedWeather = ({ data }) => {

    // Parse data.
    let wind_speed = Math.round(data.wind.speed);
    let humidity = data.main.humidity;

    return (
        <DetailedWeatherDiv >

            <WeatherBox>
                <p> Wind Speed: { wind_speed } </p>
                <img src={wind_icon} alt="wind icon"/>
            </WeatherBox>

            <WeatherBox>
                <p> Humidity: { humidity } </p>
                <img src={humidity_icon} alt="humidity icon"/>
            </WeatherBox>

            <WeatherBox>
                <img src={rain_icon} alt="rain icon" />
            </WeatherBox>

        </DetailedWeatherDiv>
    )
}

export default DetailedWeather;
import React from "react";
import styled from "styled-components";

// Import images.
import wind_icon  from "../Assets/Images/wind.png";
import humidity_icon from "../Assets/Images/humidity.png";

const DetailedWeatherDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: Roboto-Light;
    padding: 15px;
`

const WeatherBox = styled.div`
    display: flex;
    flex-direction: column;
`

const TextMedium = styled.p`
    font-size: 18px;
    margin: 5px 0px 5px 0px;
`

const DetailedWeather = ({ data }) => {

    // Parse data.
    let wind_speed = Math.round(data.wind.speed);
    let humidity = data.main.humidity;
    let feels_like = `${Math.round(data.main.feels_like)}° F `;

    return (
        <DetailedWeatherDiv >

            <WeatherBox>
                <TextMedium> Feels like { feels_like } </TextMedium>
                <img src={humidity_icon} alt="humidity icon"/>
            </WeatherBox>

            <WeatherBox>
                <TextMedium> Humidity: { humidity }%</TextMedium>
                <img src={humidity_icon} alt="humidity icon"/>
            </WeatherBox>

            <WeatherBox>
                <TextMedium> Wind Speed: { wind_speed } </TextMedium>
                <img src={wind_icon} alt="wind icon"/>
            </WeatherBox>

        </DetailedWeatherDiv>
    )
}

export default DetailedWeather;
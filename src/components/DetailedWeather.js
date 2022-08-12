import React from "react";
import styled from "styled-components";

import {
    TextSmall,
    TextMedium,
} from "../shared/SharedComponents";

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
    align-items: center;
`

const WeatherBoxData = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`

const DetailedWeather = ({ data, unitToggle }) => {

    // Parse data.
    let wind_speed = `${Math.round(data.wind.speed)} ${unitToggle ? "mph" : "m/s"}`;
    let humidity = data.main.humidity;
    let feels_like = `${Math.round(data.main.feels_like)}° ${unitToggle ? "F" : "C"}`;

    return (
        <DetailedWeatherDiv >

            <WeatherBox>
                <img src={humidity_icon} alt="humidity icon"/>
                <WeatherBoxData>
                    <TextSmall> Feels like </TextSmall>
                    <TextMedium> { feels_like }</TextMedium>
                </WeatherBoxData>
            </WeatherBox>

            <WeatherBox>
                <img src={humidity_icon} alt="humidity icon"/>
                <WeatherBoxData>
                    <TextSmall> Humidity:</TextSmall>
                    <TextMedium> { humidity }%</TextMedium>
                </WeatherBoxData>
            </WeatherBox>

            <WeatherBox>
            <img src={wind_icon} alt="wind icon"/>
                <WeatherBoxData>
                    <TextSmall> Wind Speed: </TextSmall>
                    <TextMedium>  { wind_speed } </TextMedium>
                </WeatherBoxData>
            </WeatherBox>

        </DetailedWeatherDiv>
    )
}

export default DetailedWeather;
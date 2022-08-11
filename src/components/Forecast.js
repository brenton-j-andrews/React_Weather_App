import * as util from "../Util/utilities";

import React from "react";
import styled from "styled-components";

const ForecastDiv = styled.div`
    display: flex;
    position: absolute;
    bottom: 0;
`

const ForecastUnit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px 5px 0px 5px;
    border: 3px solid white;
`

const Forecast = ({ data }) => {

    return (
        <ForecastDiv >
            {data.map((daily_forecast) => {
                return (
                    <ForecastUnit>
                        <p> {util.unixToDayName(daily_forecast.dt)}</p>
                        <p> {Math.round(daily_forecast.temp.day)}° F  </p>
                        <p> {Math.round(daily_forecast.temp.min)}° F  </p>
                        <img  src={`http://openweathermap.org/img/wn/${daily_forecast.weather[0].icon}@2x.png`} alt="weather_icon"/>
                    </ForecastUnit>
                )
            })}
            
        </ForecastDiv>
    )
}

export default Forecast;


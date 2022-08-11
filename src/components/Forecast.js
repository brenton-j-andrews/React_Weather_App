import * as util from "../Util/utilities";

import React, { useState } from "react";
import styled from "styled-components";

import {
    TextSmall,
    TextMedium
} from "../shared/Text";

const ForecastWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    position: absolute;
    bottom: 100px;
    width: 90%;
    height: 250px;
`

const ForecastDiv = styled.div`
    display: flex;
    margin-top: 15px;
    width: 100%;
    overflow-x: scroll;
    scrollbar-color: red;
    ::-webkit-scrollbar {
        width: 30px;
    }
`

const ForecastUnit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
    margin: 0px 5px 0px 5px;
    border: 3px solid white;
    width: 140px;
    height: 180px;
`

const Forecast = ({ data }) => {

    const [ toggle, setToggle ] = useState(true);

    return (

        <ForecastWrapper>
            <button onClick={() => {setToggle(toggle => !toggle)}}> 
                {toggle ? "Show Hourly Forecast" : "Show Daily Forecast"} 
            </button>



            {toggle &&
                <ForecastDiv >
                    {data['daily'].map((daily_forecast) => {
                        return (
                            <ForecastUnit>
                                <TextMedium> {util.unixToDayName(daily_forecast.dt)}</TextMedium>
                                <TextSmall> {Math.round(daily_forecast.temp.day)}° F  </TextSmall>
                                <TextSmall> {Math.round(daily_forecast.temp.min)}° F  </TextSmall>
                                <img  src={`http://openweathermap.org/img/wn/${daily_forecast.weather[0].icon}@2x.png`} alt="weather_icon"/>
                            </ForecastUnit>
                        )
                    })}
                </ForecastDiv>
            }

            {!toggle &&
                <ForecastDiv >
                    {data['hourly'].map((hourly_forecast) => {
                        return (
                            <ForecastUnit>
                                <TextMedium> {util.unixToTime(hourly_forecast.dt)} </TextMedium>
                                <TextSmall> {Math.round(hourly_forecast.temp)}° F  </TextSmall>
                                <img  src={`http://openweathermap.org/img/wn/${hourly_forecast.weather[0].icon}@2x.png`} alt="weather_icon"/>
                            </ForecastUnit>
                        )
                    })}
                </ForecastDiv>
            }   
        </ForecastWrapper>
    )
}

export default Forecast;


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
    height: 350px;
`

const DailyForecastDiv = styled.div`
    display: flex;
    margin: 15px 0px 15px 0px;
    width: 100%;

    overflow-x: auto;
`

const DailyUnit = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border: 3px solid white;

    box-sizing: border-box;
    min-width: calc(100% / 7);
    height: 180px;
`

const HourlyUnit = styled(DailyUnit)`
    min-width: calc(100% / 8 + 1em);
`

const Forecast = ({ data }) => {

    const [ toggle, setToggle ] = useState(true);

    return (

        <ForecastWrapper>
            <button onClick={() => {setToggle(toggle => !toggle)}}> 
                {toggle ? "Show Hourly Forecast" : "Show Daily Forecast"} 
            </button>

            {toggle &&
                <DailyForecastDiv >
                    {data['daily'].map((daily_forecast) => {
                        return (
                            <DailyUnit>
                                <TextMedium> {util.unixToDayName(daily_forecast.dt)}</TextMedium>
                                <TextSmall> {Math.round(daily_forecast.temp.day)}° F  </TextSmall>
                                <TextSmall> {Math.round(daily_forecast.temp.min)}° F  </TextSmall>
                                <img  src={`http://openweathermap.org/img/wn/${daily_forecast.weather[0].icon}@2x.png`} alt="weather_icon"/>
                            </DailyUnit>
                        )
                    })}
                </DailyForecastDiv>
            }

            {!toggle &&
                <DailyForecastDiv >
                    {data['hourly'].map((hourly_forecast) => {
                        return (
                            <HourlyUnit>
                                <TextMedium> {util.unixToTime(hourly_forecast.dt)} </TextMedium>
                                <TextSmall> {Math.round(hourly_forecast.temp)}° F  </TextSmall>
                                <img  src={`http://openweathermap.org/img/wn/${hourly_forecast.weather[0].icon}@2x.png`} alt="weather_icon"/>
                            </HourlyUnit>
                        )
                    })}
                </DailyForecastDiv>
            }   
        </ForecastWrapper>
    )
}

export default Forecast;


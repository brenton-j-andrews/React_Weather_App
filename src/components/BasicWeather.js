import React, { useState } from "react";
import styled from "styled-components";

import fromUnixTime from 'date-fns/fromUnixTime'

import {
    TextSmall,
    TextMedium,
    TextLarge
} from "../shared/SharedComponents";

// Styled Components.
const BasicWeatherDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: Roboto-Light;
    padding: 15px;
`

const BasicWeather = ({ data, searchSubmit, unitToggle, setUnitToggle, error}) => {

    const [searchData, setSearchData ] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        searchSubmit(searchData);
        setSearchData("");
    }

    // Parse Data.
    let weather_type = data.weather[0].main;
    let location = `${data.name}, ${data.sys.country}`;
    let date = fromUnixTime(data.dt).toLocaleDateString('en-US');
    let time = fromUnixTime(data.dt).toLocaleTimeString('en-US');
    let display_temp = `${Math.round(data.main.temp)}° ${unitToggle ? "F" : "C"}`;
    let icon_src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;



    return (
        <BasicWeatherDiv >
            <h4> { weather_type } </h4>
            <TextMedium> { location }</TextMedium>
            <TextSmall> { date } </TextSmall>
            <TextSmall> { time }</TextSmall>
            <TextLarge> { display_temp } </TextLarge>
            <img  src={icon_src} alt="weather_icon"/>

            <button onClick={() => {setUnitToggle(!unitToggle)}}> {unitToggle ? "View Metric" : "View Imperial"} </button>

            <form onSubmit={handleSubmit}>
                <input 
                name="search"
                type="text"
                placeholder="  Search new location"
                value={searchData}
                onChange={e => setSearchData(e.target.value)}
                />

                <input
                type="submit"
                value="Go"
                />
            </form>

            {error.current && 
                <div style={{ marginTop: 15}}>
                    <TextSmall> Location not found. </TextSmall>
                    <TextSmall> Enter your search as 'City', 'City, State' or 'City, Country' </TextSmall> 
                </div>
            }

        </BasicWeatherDiv>
    )
}

export default BasicWeather;
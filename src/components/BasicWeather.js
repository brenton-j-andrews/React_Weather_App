import React from "react";
import styled from "styled-components";

// Styled Components.
const BasicWeatherDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: Roboto-Light;
    padding: 15px;
`

const TextSmall = styled.p`
    font-size: 14px;
`

const TextMedium = styled.p`
    font-size: 18px;
    margin: 5px 0px 5px 0px;
`

const TextLarge = styled.p`
    font-size: 48px;
`

const BasicWeather = ({

    data

}) => {

    return (
        <BasicWeatherDiv >
            <h4> { data.weather[0].main } </h4>
            <TextMedium> {data.name }</TextMedium>
            <TextSmall> { data.dt } </TextSmall>
            <TextSmall> { data.dt }</TextSmall>
            <TextLarge> { data.main.temp } </TextLarge>
        </BasicWeatherDiv>
    )
}

export default BasicWeather;
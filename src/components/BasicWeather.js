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

const BasicWeather = () => {
    return (
        <BasicWeatherDiv >
            <h4> Scattered Clouds </h4>
            <p> Salt Lake City, USA </p>
            <p> This is another thing.</p>
        </BasicWeatherDiv>
    )
}

export default BasicWeather;
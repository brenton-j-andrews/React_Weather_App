import React from "react";
import styled from "styled-components";

const DetailedWeatherDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 15px;
`

const DetailedWeather = () => {
    return (
        <DetailedWeatherDiv >
            <p> Scattered Clouds </p>
            <p> This is another thing.</p>
        </DetailedWeatherDiv>
    )
}

export default DetailedWeather;
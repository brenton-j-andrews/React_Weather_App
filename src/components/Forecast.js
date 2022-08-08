import React from "react";
import styled from "styled-components";

const ForecastDiv = styled.div`
    position: absolute;
    bottom: 0;
`

const Forecast = () => {
    return (
        <ForecastDiv >
            <p> Hello from forecast! </p>
        </ForecastDiv>
    )
}

export default Forecast;
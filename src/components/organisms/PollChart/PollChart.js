import React from "react";
import { StyledPollChartContainer, StyledPollChartTitleTemp } from "./PollChart.style";

let titleTemp = "TODO Selected Item: ";

const PollChart = (prop) => {
    let {getSelected} = prop;
    const selected = getSelected();

    return(
        <StyledPollChartContainer>
            <StyledPollChartTitleTemp>
                {titleTemp}
                {'main: '+selected[0]+'-'+selected[1]+', sub: '+selected[2]+'-'+selected[3]}
            </StyledPollChartTitleTemp>
        </StyledPollChartContainer>
    );
}

export default PollChart;
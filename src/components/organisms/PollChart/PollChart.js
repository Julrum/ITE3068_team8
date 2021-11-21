import React from "react";
import { StyledPollChartLayout, StyledPollChartTitleTemp, StyledPollChartContainer } from "./PollChart.style";
import PollLineChart from "../../molecules/PollLineChart";
import PollBarChartVertical from "../../molecules/PollBarChartVertical";

let titleTemp = " ";
let dummyData;
let selected;

const PollChart = (prop) => {
    let {getSelected, chartDummyData} = prop;
    selected = getSelected();
    dummyData = chartDummyData;
    console.log('dummyData is: '+dummyData);

    return(
        <StyledPollChartLayout>
            <StyledPollChartTitleTemp>
                {titleTemp}
                {/* {'main: '+selected[0]+'-'+selected[1]+', sub: '+selected[2]+'-'+selected[3]} */}
                {'main: '+selected[1]+', sub: '+selected[3]}
            </StyledPollChartTitleTemp>
            <StyledPollChartContainer>
              {selected[0] !== 2 && selected[0] !== 3 ?
                <PollLineChart
                  
                  data={selected[0] === 1 ? dummyData[1][selected[2]] : dummyData[selected[0]]}>

                </PollLineChart>
              : <PollBarChartVertical
                  data={dummyData[selected[0]]}>
                </PollBarChartVertical>}
                
            </StyledPollChartContainer>
        </StyledPollChartLayout>
    );
}

export default PollChart;
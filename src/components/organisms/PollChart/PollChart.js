import React from "react";
import { StyledPollChartLayout, StyledPollChartTitleTemp, StyledPollChartContainer } from "./PollChart.style";
import PollLineChart from "../../molecules/PollLineChart";
import PollLineChartSimple from "../../molecules/PollLineChartSimple";
import PollBarChartVertical from "../../molecules/PollBarChartVertical";

let titleTemp = " ";
let dummyData;
let selected;

const PollChart = (prop) => {
    let {getSelected, chartDummyData} = prop;
    selected = getSelected();
    dummyData = chartDummyData;
    console.log('dummyData is: '+dummyData);

    let chartType = (num) => {
      if(num === 0){
        return(
          <PollLineChart
            data={dummyData[selected[0]]}>
          </PollLineChart>
        );
      }else if(num === 1){
        return(
          <PollLineChartSimple
            data={dummyData[1][selected[2]]}>
          </PollLineChartSimple>
        );
      }else if(num === 2 || num === 3){
        return(
          <PollBarChartVertical
            data={dummyData[selected[0]]}>
          </PollBarChartVertical>
        );
      }else{
        return 'p';
      }
    }

    return(
        <StyledPollChartLayout>
            <StyledPollChartTitleTemp>
                {titleTemp}
                {/* {'main: '+selected[0]+'-'+selected[1]+', sub: '+selected[2]+'-'+selected[3]} */}
                {'main: '+selected[1]+', sub: '+selected[3]}
            </StyledPollChartTitleTemp>
            <StyledPollChartContainer>

              {chartType(selected[0])}

              {/* {(e) => {
                switch(selected[0]){
                  case 0:
                    <PollLineChart
                      data={dummyData[selected[0]]}>
                    </PollLineChart>
                  break;

                  case 1:
                    <PollLineChartSimple
                      data={dummyData[1][selected[2]]}>
                    </PollLineChartSimple>
                  break;
                  
                  case 2 && 3:
                    <PollBarChartVertical
                      data={dummyData[selected[0]]}>
                    </PollBarChartVertical>
                  break;

                  default:
                  break;
                }
              }} */}

              {/* {selected[0] !== 2 && selected[0] !== 3 ?
                <PollLineChart
                  
                  data={selected[0] === 1 ? dummyData[1][selected[2]] : dummyData[selected[0]]}>

                </PollLineChart>
              : <PollBarChartVertical
                  data={dummyData[selected[0]]}>
                </PollBarChartVertical>} */}
                
            </StyledPollChartContainer>
        </StyledPollChartLayout>
    );
}

export default PollChart;
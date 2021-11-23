import React from "react";
import { StyledPollChartLayout, StyledPollChartTitleTemp, StyledPollChartContainer, StyledPollChartDetailedInfo } from "./PollChart.style";
import PollLineChart from "../../molecules/PollLineChart";
import PollBarChartVertical from "../../molecules/PollBarChartVertical";

let dummyData;
let selected;

const PollChart = (prop) => {
    let {getSelected, chartDummyData} = prop;
    selected = getSelected();
    dummyData = chartDummyData;

    let chartType = (num) => {
      if(num === 0){
        return(
          <PollLineChart
            data={dummyData[selected[0]]}
            chartType={selected[0]}>
          </PollLineChart>
        );
      }else if(num === 1){
        return(
          <PollLineChart
            data={dummyData[1][selected[2]]}
            chartType={selected[0]}>
          </PollLineChart>
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

    let detailedInfo = () => {
      let orgs = '';
      let terms = '';

      if(selected[0] === 1){
        const tmpdata = dummyData[1][selected[2]][0];
        orgs = tmpdata.org;
        terms = tmpdata.term;
      }else{
        const tmpdata = dummyData[selected[0]][0];
        orgs = tmpdata.org;
        terms = tmpdata.term;
        //console.log('tmpdata: '+tmpdata.org+orgs+terms);
      }

      return(<div>
              <StyledPollChartDetailedInfo>
                {"단위: %"}
              </StyledPollChartDetailedInfo>
              <StyledPollChartDetailedInfo>
                {"조사 기관: "+orgs}
              </StyledPollChartDetailedInfo>
              <StyledPollChartDetailedInfo>
                {"조사 기간: "+terms}
              </StyledPollChartDetailedInfo>
            </div>
            
      );
    }

    return(
        <StyledPollChartLayout>
            <StyledPollChartTitleTemp>
                {
                  selected[0] === 1 ? 
                  selected[1]+': '+selected[3]
                  : selected[1]
                }
            </StyledPollChartTitleTemp>
            <StyledPollChartContainer>

              {chartType(selected[0])}
                
            </StyledPollChartContainer>
            {detailedInfo()}
        </StyledPollChartLayout>
    );
}

export default PollChart;
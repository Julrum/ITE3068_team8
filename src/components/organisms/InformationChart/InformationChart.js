import React from "react";
import InformationLineBarChart from "../../molecules/InformationLineBarChart";
import { ChartTitle, ChartTitleContainer, StyledInfoChartContainer } from "./InformationChart.style";

const InformationChart = () => {
    return(
        <StyledInfoChartContainer>
            <ChartTitleContainer>
                <ChartTitle>
                    {"역대 대선 득표율 및 투표율"}
                </ChartTitle>
            </ChartTitleContainer>

            <InformationLineBarChart>

            </InformationLineBarChart>
        </StyledInfoChartContainer>
        
    );
}

export default InformationChart;
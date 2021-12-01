import React from "react";
import {
    ComposedChart,
    Line,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Legend,
    ResponsiveContainer,
    LabelList,
  } from 'recharts';

import theme from "../../../styles/theme";
import { StyledInfoLineBarChartContainer } from "./InformationLineBarChart.style";
import ElectionInfoData from "./ElectionInfoData";

const InformationLineBarChart = () => {
    return (
        <StyledInfoLineBarChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <ComposedChart
            width={500}
            height={1000}
            data={ElectionInfoData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis xAxisId="upper" dataKey="name" scale="band" dy={8} tick={{ fontSize: 16, fontWeight: 'bold'}}/>
            <XAxis xAxisId="lower" dataKey="subname" dy={0} tick={{ fontSize: 16, fontWeight: 'bold'}} strokeWidth={0}/>
            <YAxis domain={[0, 100.0]} dx={-4} tick={{ fontSize: 16, fontWeight: 'bold'}} tickCount={6}/>
            <Legend iconSize={32} wrapperStyle={{ marginRight: "20px", marginBottom: "10px", fontWeight: "bold" }} verticalAlign="top" align="right"/>
            
            <Bar dataKey="turnout" name="득표율" barSize={100} fill={theme.colors.pollDarkBlue} xAxisId="upper">
                <LabelList
                    dataKey="turnout"
                    fontSize={16}
                    fontWeight="bold"
                    style={{fill: "white"}}
                    position="top"
                    
                    dy={32}>

                </LabelList>
            </Bar>
            <Line dataKey="total" name="투표율" stroke={theme.colors.primary} strokeWidth={4} xAxisId="upper">
                <LabelList
                    dataKey="total"
                    fontSize={16}
                    fontWeight="bold"
                    style={{fill: theme.colors.pollDarkBlue}}
                    position="top"
                    
                    dy={-8}>

                </LabelList>
            </Line>
            
          </ComposedChart>
        </ResponsiveContainer>
        </StyledInfoLineBarChartContainer>
      );
}

export default InformationLineBarChart;

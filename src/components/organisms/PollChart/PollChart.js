import React, { PureComponent } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts';
import theme from "../../../styles/theme";
import { StyledPollChartLayout, StyledPollChartTitleTemp, StyledPollChartContainer } from "./PollChart.style";
import PollLineChart from "../../molecules/PollLineChart";

let titleTemp = " ";
let dummyData;
let selected;


class Example extends PureComponent {
    static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';
  
    render() {
      return (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={dummyData[selected[0]]}
            margin={{
              top: 30,
              right: 30,
              left: 20,
              bottom: 15,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="lee" stroke={theme.colors.primary} strokeWidth={3} activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="yoon" stroke="#82ca9d" strokeWidth={3}>
              <LabelList dataKey="yoon" position="top" />
            </Line>
            <Line type="monotone" dataKey="sim" stroke="#82cbbb" strokeWidth={3}/>
            <Line type="monotone" dataKey="ahn" stroke="#82c000" strokeWidth={3}/>
            <Line type="monotone" dataKey="others" name="기타" stroke="#82c555" strokeWidth={3}/>
          </LineChart>
        </ResponsiveContainer>
      );
    }
  }

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
                <PollLineChart
                  
                  data={selected[0] == 1 ? dummyData[1][selected[2]] : dummyData[selected[0]]}>

                </PollLineChart>
            </StyledPollChartContainer>
        </StyledPollChartLayout>
    );
}

export default PollChart;
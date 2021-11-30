import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PollLineChart = ({data, chartType}) =>{

  let valueInfo = [...data];
  const mainInfo = data[0];
  valueInfo.shift();

  let array = [];
  for(let i = 0; i < mainInfo.numOfMembers; i++){
    array.push(i);
  }

  let Lines = () => {
    return(
      array.map((item, index) => 
        <Line
          key={index}
          //for curved lines, use type="monotone"
          dataKey={mainInfo.keys[index]}
          name={mainInfo.names[index]}
          stroke={mainInfo.colors[index]}
          strokeWidth={5}
          >
    
        </Line>
      )
    );
  }

  let SimpleLines = () => {
    return(
      array.map((item, index) => 
        <Line
          key={index}
          dataKey={mainInfo.keys[index]}
          name={mainInfo.names[index]}
          stroke={mainInfo.colors[index]}
          strokeWidth={6}
          yAxisId="right"
          >

          </Line>
        )
      );
  }
    
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={valueInfo}
        margin={{
          top: 30,
          right: 30,
          left: 20,
          bottom: 15,
          }}
      >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" dy={15}/>
      {chartType === 0 ?
      <>
      <YAxis dx={-4}/>
      <Tooltip />
      <Legend wrapperStyle={{ paddingTop: "25px" }} iconSize={24} />
      </>
      : <>
      <YAxis tick={false} />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip />
      <Legend wrapperStyle={{ paddingTop: "25px" }} iconSize={32} />
      </>}

      {chartType === 0 ? Lines() : SimpleLines()}

      </LineChart>
    </ResponsiveContainer>
  );

}

export default PollLineChart;
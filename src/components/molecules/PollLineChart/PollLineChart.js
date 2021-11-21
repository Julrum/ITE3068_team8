import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PollLineChart = ({data}) =>{

  let valueInfo = [...data];
  const mainInfo = data[0];
  valueInfo.shift();


  let array = [];
  for(let i = 0; i < mainInfo.numOfMembers; i++){
    //console.log('nm: '+mainInfo.numOfMembers);
    array.push(i);
  }

  let Lines = () => {
    return(
      array.map((item, index) => 
        <Line
          key={index}
          //type="monotone"
          dataKey={mainInfo.keys[index]}
          name={mainInfo.names[index]}
          stroke={mainInfo.colors[index]}
          strokeWidth={5}>
    
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
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend wrapperStyle={{paddingTop: "15px"}} iconSize={24}/>

      {Lines()}

      </LineChart>
    </ResponsiveContainer>
  );

}

export default PollLineChart;
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, Tooltip } from 'recharts';
//import theme from '../../../styles/theme';

const PollLineChartSimple = ({data}) =>{

  let valueInfo = [...data];
  const mainInfo = data[0];
  valueInfo.shift();

  let array = [];
  for(let i = 0; i < mainInfo.numOfMembers; i++){
    array.push(i);
  }

  // let posArray=[];
  // for(let j = 0; j < valueInfo.length; j++){
  //   if(valueInfo[j][mainInfo.keys[0]] >= valueInfo[j][mainInfo.keys[1]]){
  //     posArray.push(0);
  //   }else{
  //      posArray.push(1);
  //   }
  // }
  // console.log('posArray: '+posArray);

  let Lines = () => {
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
            {/* <LabelList
                  dataKey={mainInfo.keys[index]}
                  // position={posArray[index] === index ? "top" : "bottom"}
            ></LabelList> */}

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
      <YAxis tick={false} />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip />
      <Legend wrapperStyle={{paddingTop: "15px"}} iconSize={32} />

      {Lines()}

      </LineChart>
    </ResponsiveContainer>
  );

}

export default PollLineChartSimple;
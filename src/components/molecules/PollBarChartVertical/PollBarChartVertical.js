import React from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LabelList} from "recharts";

const PollBarChartVertical = ({data}) => {

    const valueInfo = [...data];
    const mainInfo = data[0];
    valueInfo.shift();

    let array = [];
    for(let i = 0; i < mainInfo.numOfMembers; i++){
        array.push(i);
    }

    let Bars = () => {
        return(
            array.map((item, index)=>
                <Bar
                    key={index}
                    dataKey={mainInfo.keys[index]}
                    name={mainInfo.names[index]}
                    fill={mainInfo.colors[index]}
                    stackId="a"
                    yAxisId="left"
                    >
                    <LabelList
                        dataKey={mainInfo.keys[index]}
                        fontSize={18}
                        fontWeight="bold"
                        style={{fill: "white"}}
                    >

                    </LabelList>
                </Bar>
            )
        )
    }

    return (
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={valueInfo}
          margin={{
            top: 20,
            right: 20,
            left: 80,
            bottom: 5
          }}
          layout="vertical" 
          barCategoryGap={16}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 100.0]} hide padding={{top: 10}}/>
          <YAxis type="category" width={60} padding={{ top: 1, right: 50}} dataKey="name" yAxisId="left"/>
          <YAxis yAxisId="right" orientation="right" tick={false}/>
          <Tooltip />
          <Legend wrapperStyle={{paddingTop: "15px"}} iconSize={24}/>
          {Bars()}
        </BarChart>
        </ResponsiveContainer>
    );
}

export default PollBarChartVertical;
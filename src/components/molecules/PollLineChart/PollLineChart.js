import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PollLineChart = ({data}) =>{

    // let datum = data;

    // let [valueInfo, setValueInfo] = useState(datum);
    // let [mainInfo, setMainInfo] = useState(datum[0]);

    // console.log(mainInfo);

    // setValueInfo(data.shift());

    //const mainInfo = valueInfo[0];

        let valueInfo = [...data];
        console.log('sss:' + valueInfo);
        console.log('datalen: '+data.length);
        const mainInfo = data[0];
        valueInfo.shift();


        console.log('datalen: '+data.length);

        let array = [];
        for(let i = 0; i < mainInfo.numOfMembers; i++){
            console.log('nm: '+mainInfo.numOfMembers);
            array.push(i);
        }
        console.log(array);

        let Lines = () => {
            return(
                array.map((item, index) => 
                <Line
                key={index}
                type="monotone"
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
            <Legend />

            {Lines()}

          </LineChart>
        </ResponsiveContainer>
      );

  }

export default PollLineChart;
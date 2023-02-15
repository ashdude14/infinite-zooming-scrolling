import React from "react";
import {
Chart as ChartJS,
LineElement,
PointElement,
LinearScale,
Tooltip,
TimeScale
 } from 'chart.js';
 import 'chartjs-adapter-date-fns';
import { Line } from "react-chartjs-2";
import {run} from './data.js';

ChartJS.register(
  LineElement,
  LinearScale,
  TimeScale,
  PointElement,
  Tooltip,
);
run();
function App()
{
  const data ={
    labels: ['2022-11-01','2022-11-02','2022-11-03'], // pickup_datetime
    datasets : [
      {
        data :[3,6,9,3.69], // trip_distance
        backgroundColor :'red',
        borderColor : 'black',
        tension :'1'
      }
    ]
  };
  const options ={
    scales : {
      x:{
         type : 'time',
         time : {
          displayFormats: {
            quarter: 'MMM YYYY'
        }
         },
         min: '022-11-01 00:00:00'
         
      },
      y : {
        beginAtZero : true
      }
    }
  }
  return (
    <div className="App">
      <h1>pickup_datetime  v/s trip_distance</h1>
      <div>
        <Line
        data={data}
        options={options}
        ></Line>
      </div>
    </div>
  );
}

export default App;
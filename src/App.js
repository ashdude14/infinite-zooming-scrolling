import React, { useState } from 'react';
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
import { runTrip,runDistance} from './data.js';

ChartJS.register(
  LineElement,
  LinearScale,
  TimeScale,
  PointElement,
  Tooltip,
);
 function App()
{

  const [trip, setTrip] = useState(
    runTrip(100).then(res=>(setTrip(res)))
  );
  //console.log("trip_distance"+trip);
  const [pickup, setPickup] = useState(
    runDistance(100).then(res=>(setPickup(res)))
  );
 // console.log("hey ashhhhh " + trip);
  const data ={
    labels: trip,//trip['dataset'], // pickup_datetime
    datasets : [
      {
        data :pickup,// dist['dataset'], // trip_distance
        backgroundColor :'red',
        borderColor : 'black',
        tension :'000.1'
      }
    ]
  };
  const options ={
    scales : {
      x:{
         type : 'time',
         time : {
          displayFormats: {
            quarter: 'MMM-YYYY'
        }
         },
       //  min: '2009-01-01T00:00:00.000000Z' 
         
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
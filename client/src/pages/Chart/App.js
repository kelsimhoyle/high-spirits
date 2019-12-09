import React from 'react';
import {Pie} from 'react-chartjs-2';

const state = {
  labels: ['Woody/Nutty', 
           'Caramel', 
           'Herbal/Spice', 
           'Citrus', 
           'Floral', 
           'Fruity', 
           'Vanilla', 
           'None/Mild'],
  datasets: [
    {
      backgroundColor: ["#6E2C00", "#F8C471", "#C0392B", "#FFA500", "#BB8FCE", "#FF1493", "#FEF9E7", "#85929E"],
      data: [45,45,45,45,45,45,45,45],
    }
  ]
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Pie
          data={state}
          width={125}
          height={50}
          options={{
            title:{
              display:true,
              text:'Choose a flavor to get started',
              fontSize:60
            },
            legend:{
              display:true,
              position:'left'
            }
          }}
        />
      </div>
    );
  }
}

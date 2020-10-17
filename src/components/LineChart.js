import React from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

export default class LineChart extends React.Component {
   render() {
      const data = {
         labels: this.props.data.map((d) => moment(d.date).format('M/D/YYYY')),
         datasets: [
            {
               label: 'Closing Price',
               data: this.props.data.map((p) => p.close),
               backgroundColor: 'rgba(75,192,192,0.4)',
               borderColor: 'rgba(75,192,192,1)',
               borderCapStyle: 'butt',
               borderDash: [],
               borderDashOffset: 0.0,
               borderJoinStyle: 'miter',
               pointBorderColor: 'rgba(75,192,192,1)',
               pointBackgroundColor: '#fff',
               pointBorderWidth: 1,
               pointHoverRadius: 5,
               pointHoverBackgroundColor: 'rgba(75,192,192,1)',
               pointHoverBorderColor: 'rgba(220,220,220,1)',
               pointHoverBorderWidth: 2,
               pointRadius: 1,
               pointHitRadius: 10,
            },
            {
               label: 'Opening Price',
               data: this.props.data.map((p) => p.open),
               backgroundColor: 'rgba(146,142,244,0.4)',
               borderColor: 'rgba(146,142,244,1)',
               borderCapStyle: 'butt',
               borderDash: [],
               borderDashOffset: 0.0,
               borderJoinStyle: 'miter',
               pointBorderColor: 'rgba(146,142,244,1)',
               pointBackgroundColor: '#fff',
               pointBorderWidth: 1,
               pointHoverRadius: 5,
               pointHoverBackgroundColor: 'rgba(146,142,244,1)',
               pointHoverBorderColor: 'rgba(220,220,220,1)',
               pointHoverBorderWidth: 2,
               pointRadius: 1,
               pointHitRadius: 10,
            },
         ],
      };
      return (
         <div>
            <Line data={data} />
         </div>
      );
   }
}

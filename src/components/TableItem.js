import React from 'react';
import moment from 'moment';

const TableItem = ({ data }) => {
   const date = moment(data.date).format('M/D/YYYY');
   return (
      <tr>
         <td>{date}</td>
         <td>{data.open}</td>
         <td>{data.high}</td>
         <td>{data.low}</td>
         <td>{data.close}</td>
         <td>{data.volume}</td>
         <td>{data.adj_open}</td>
         <td>{data.adj_high}</td>
         <td>{data.adj_low}</td>
         <td>{data.adj_close}</td>
      </tr>
   );
};

export default TableItem;

// <th>Date</th>
// <th>Open Price</th>
// <th>High Price</th>
// <th>Low Price</th>
// <th>Close Price</th>
// <th>Volume</th>
// <th>Adj Open</th>
// <th>Adj High</th>
// <th>Adj Low</th>
// <th>Adj Close</th>

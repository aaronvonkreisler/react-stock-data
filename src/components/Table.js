import React from 'react';
import TableItem from './TableItem';
const Table = ({ data }) => {
   const renderedList = data.map((dataItem) => {
      return <TableItem data={dataItem} key={dataItem.date} />;
   });
   return (
      <div>
         <table className="ui selectable inverted table">
            <thead>
               <tr>
                  <th>Date</th>
                  <th>Open Price</th>
                  <th>High Price</th>
                  <th>Low Price</th>
                  <th>Close Price</th>
                  <th>Volume</th>
                  <th>Adj Open</th>
                  <th>Adj High</th>
                  <th>Adj Low</th>
                  <th>Adj Close</th>
               </tr>
            </thead>
            <tbody>{renderedList}</tbody>
         </table>
      </div>
   );
};

export default Table;

import React from 'react';
import SearchBar from './components/SearchBar';
import marketshare from './apis/marketshare';
import Table from './components/Table';
import LineChart from './components/LineChart';

class App extends React.Component {
   state = {
      stockData: [],
   };
   onFormSubmit = async (term) => {
      const response = await marketshare.get('/eod', {
         params: {
            symbols: term,
         },
      });
      this.setState({
         stockData: response.data.data.reverse(),
      });
   };
   render() {
      return (
         <div className="ui container">
            <SearchBar onFormSubmit={this.onFormSubmit} />
            <LineChart data={this.state.stockData} />
            <Table data={this.state.stockData} ticker={this.state.term} />
         </div>
      );
   }
}

export default App;

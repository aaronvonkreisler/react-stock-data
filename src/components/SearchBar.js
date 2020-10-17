import React from 'react';

class SearchBar extends React.Component {
   state = { term: '' };
   onTermChange = (e) => {
      this.setState({ term: e.target.value });
   };
   onFormSubmit = (e) => {
      e.preventDefault();
      this.props.onFormSubmit(this.state.term);
   };
   render() {
      return (
         <div className="ui raised green segment">
            <form className="ui form" onSubmit={this.onFormSubmit}>
               <div className="ui field">
                  <label>Search</label>
                  <input
                     type="text"
                     placeholder="Search by TICKR"
                     value={this.state.term}
                     onChange={this.onTermChange}
                  />
               </div>
            </form>
         </div>
      );
   }
}

export default SearchBar;

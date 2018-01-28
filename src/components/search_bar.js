import React, { Component } from 'react';

// Functional component
// const SearchBar = () => {
//   return <input />;
// };

// Class based component
// class SearchBar extends React.Component {
// ES6:
class SearchBar extends Component {
  constructor(props) {
    // Calls superclass(Component) constructor to initialize
    super(props);

    // init state
    this.state = { searchTerm: '' };
    // Object contains properties we want to record on the state
  }

  // Class method/function
  render() {
    return (
      <div className="search-bar">
        {/* Controlled component */}
        <form onSubmit={e => e.preventDefault()}>
            <label htmlFor="input-bar">Search</label> <br />
            <input id="input-bar"
              value = {this.state.searchTerm}
              onChange={e => this.setState({searchTerm: e.target.value})}
              onFocus={e => e.target.setSelectionRange(0, e.target.value.length)}
              />
          <input type="submit" value="Submit" />
         </form>
      </div>
    )
  }
}

export default SearchBar;

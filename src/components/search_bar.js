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
    this.state = { searchTerm: 'Search' };
    // Object contains properties we want to record on the state
  }

  // Class method/function
  render() {
    return (
      <div className="search-bar">
        {/* Controlled component */}
        <form onSubmit={e => {
                console.log("Start search");
                e.preventDefault
            }}>
            <input
              className="form-control"
              placeholder={this.state.searchTerm}
              onChange={e => this.setState({searchTerm: e.target.value})}
              onFocus={e => e.target.setSelectionRange(0, e.target.value.length)}
              />
          <input type="submit" className="btn btn-default" value="Submit" />
         </form>
      </div>
    )
  }
}

export default SearchBar;

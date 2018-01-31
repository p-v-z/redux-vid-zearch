import React, { Component } from 'react';

// Functional component
// const SearchBar = () => {
//   return <input />;
// };

// Class based component
class SearchBar extends React.Component {
// ES6:
// SearchBar extends Component
	constructor(props) {
		// Calls superclass(Component) constructor to initialize
		super(props);

		// init state
		this.state = { searchTerm: 'Search' };
		// Object contains properties we want to record on the state
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

	// Class method/function
	render() {
		return(
			<div className="search-bar">

				{/* Controlled component */}
				<form>
					<input
						className="form-control"
						placeholder={this.state.searchTerm}
						onFocus={e => e.target.setSelectionRange(0, e.target.value.length)}
						onChange={e => this.onInputChange(e.target.value)}
					/>
					<input type="submit" className="btn btn-default bg-success" value="Submit" />
				</form>
			</div>
		)
	}
}

export default SearchBar;

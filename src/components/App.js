import React from "react";
import FruitBasket from "./FruitBasket";

class App extends React.Component {

	state = {
		fruit: [],
		filters: [],
		currentFilter: null
	}

	fetchFruit = () => {
		fetch("/api/fruit")
		.then(data => data.json())
		.then(fruit => this.setState({fruit}))
	}

	fetchFilters = () => {
		fetch("/api/fruit_types")
		.then(data => data.json())
		.then(filters => this.setState({filters}))
	}

	handleFilterChange = event => this.setState({currentFilter: event.target.value})

	componentWillMount() {
		this.fetchFruit();
		this.fetchFilters();
	}

	render() {
		const {fruit, filters, currentFilter} = this.state

		return (
			<FruitBasket fruit={fruit}
									 filters={filters}
									 currentFilter={currentFilter}
									 updateFilterCallback={this.handleFilterChange} />
		)
	}

}

export default App

import React from "react"

const FilteredFruitList = ({fruit, filter}) => {
	const list = !filter || filter === "all" ? fruit : fruit.filter(item => item.fruit_type === filter)

	return <ul className="fruit-list">{list.map((item, i) => <li key={i}>{item.char}</li>)}</ul>
}

FilteredFruitList.defaultProps = {
	fruit: [],
	filter: null
}

export default FilteredFruitList

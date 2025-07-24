import { useState } from "react";
import Nav from "./Nav";
import HogList from "./HogList";
import HogForm from "./HogForm";
import HogFilter from "./HogFilter";
import hogs from "../porkers_data";

function App() {
	const [hogList, setHogList] = useState(hogs);
	const [filterGreased, setFilterGreased] = useState(false);
	const [sortBy, setSortBy] = useState("");
	const [hiddenHogs, setHiddenHogs] = useState([]);

	function handleHide(name) {
		setHiddenHogs([...hiddenHogs, name]);
	}

	function handleAddHog(newHog) {
		setHogList([...hogList, newHog]);
	}

	let displayHogs = hogList
		.filter((hog) => !hiddenHogs.includes(hog.name))
		.filter((hog) => !filterGreased || hog.greased)
		.sort((a, b) => {
			if (sortBy === "name") return a.name.localeCompare(b.name);
			if (sortBy === "weight") return a.weight - b.weight;
			return 0;
		});

	return (
		<div className="App ui container">
			<Nav />

			<HogFilter
				filterGreased={filterGreased}
				setFilterGreased={setFilterGreased}
				sortBy={sortBy}
				setSortBy={setSortBy}
			/>

			<HogForm addHog={handleAddHog} />

			<HogList hogs={displayHogs} onHide={handleHide} />
		</div>
	);
}

export default App;
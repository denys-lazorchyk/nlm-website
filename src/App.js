import React, { useState } from "react";
import Map from "./components/Map";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Legends from "./components/Legends";

function App() {
	const [places, setPlaces] = useState([]);
	const [clicked, setCliked] = useState(null);

	return (
		<div className="App">
			<Nav></Nav>
			<Form
				places={places}
				setPlaces={setPlaces}
				clicked={clicked}
				setCliked={setCliked}
			></Form>
			<Legends></Legends>
			<Map clicked={clicked} setCliked={setCliked} places={places}></Map>
		</div>
	);
}

export default App;

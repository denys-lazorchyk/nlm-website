import React from "react";
import Map from "./components/Map";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Legends from "./components/Legends";

function App() {
	return (
		<div className="App">
			<Nav></Nav>
			<Form></Form>
			<Legends></Legends>
			<Map></Map>
		</div>
	);
}

export default App;

import React, { useState } from "react";
import Map from "./components/Map";
import Nav from "./components/Nav";
import Form from "./components/Form";

import styled from "styled-components";

function App() {
	const [places, setPlaces] = useState([]);
	const [clicked, setCliked] = useState(null);
	const [clickedMarker, setClikedMarker] = useState(null);

	return (
		<StyledApp>
			<Nav></Nav>
			<Form
				places={places}
				setPlaces={setPlaces}
				clicked={clicked}
				setCliked={setCliked}
				setClikedMarker={setClikedMarker}
			></Form>
			<Map
				clicked={clicked}
				setCliked={setCliked}
				places={places}
				clickedMarker={clickedMarker}
				setClikedMarker={setClikedMarker}
			></Map>
		</StyledApp>
	);
}

const StyledApp = styled.div`
	position: relative;
	overflow: hidden;
	width: 100vw !important;
`;
export default App;

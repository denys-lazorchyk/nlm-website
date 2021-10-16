import React from "react";
import styled from "styled-components";
import add from "../img/add.svg";
import Marker from "./Marker";

import { useMap } from "react-leaflet";

const Markers = ({ open, places }) => {
	const colors = {
		przeplyw1: "#B9B9B9",
		przeplyw2: "#01D404",
		przeplyw3: "#D45202",
		przeplyw4: "#0B4566",
		przeplyw5: "#000000",
		sprzedaż1: "#01D29C",
		sprzedaż2: "#BB03D7",
		sprzedaż3: "#780000",
	};

	return (
		<StyledMarkers className={open ? "active" : ""}>
			{/* <img className="plus" src={add} alt="Add new marker" /> */}

			{places.length > 0 &&
				places.map((place) => {
					return <Marker color={colors[place.data.type]}></Marker>;
				})}
		</StyledMarkers>
	);
};

const StyledMarkers = styled.div`
	position: absolute;
	height: calc(100vh - 70px);
	border-right: 1px solid lightgrey;
	width: 50px;
	top: 0px;
	left: -200px;
	background-color: white;
	padding: 10px;
	transition: 1s all;

	&.active {
		left: -280px;
	}
`;

export default Markers;

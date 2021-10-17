import React from "react";
import styled from "styled-components";
import Marker from "./Marker";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

const Markers = ({
	open,
	// places,
	// setClikedMarker,
	sdkufh,
	sdioufn,
	sd,
	iusdhf,
	iuhfi,
}) => {
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

	const { places } = useSelector((state) => state.places);
	return (
		<StyledMarkers className={open ? "active" : ""}>
			{places.length > 0 &&
				places.map((place) => {
					return (
						<Marker
							color={colors[place.data.type]}
							place={place}
							// setClikedMarker={setClikedMarker}
							key={uuidv4()}
						></Marker>
					);
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
	background-color: #ffffff;
	padding: 10px;
	transition: 1s all;

	&.active {
		top: 00px;
		left: -280px;
	}

	@media (max-width: 1000px) {
		top: 60px;
		left: 100px;
		opacity: 0;

		&.active {
			padding: 10px 0px;
			opacity: 1;
			top: 60px;
			left: -230px;
		}
	}
`;

export default Markers;

import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { clikedMarkerAction } from "../actions/clikedMarkerAction";

const Marker = ({ color, place }) => {
	const markerHandler = () => {
		if (place) {
			console.log("place: ", place);
			dispatch(clikedMarkerAction(place));
		}
	};

	const dispatch = useDispatch();

	return (
		<div onClick={markerHandler}>
			<StyledMarker
				xmlns="http://www.w3.org/2000/svg"
				fill={color}
				width="24"
				height="24"
				viewBox="0 0 24 24"
			>
				<path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
			</StyledMarker>
		</div>
	);
};

const StyledMarker = styled.svg`
	cursor: pointer;
	width: 100%;
	margin: 5px 0px;
`;

export default Marker;

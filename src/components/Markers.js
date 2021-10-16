import React, { useState } from "react";
import styled from "styled-components";
import add from "../img/add.svg";
import Marker from "./Marker";

const Markers = ({ open }) => {
	return (
		<StyledMarkers className={open ? "active" : ""}>
			<img src={add} alt="Add new marker" />
			<Marker color={"green"}></Marker>
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

	img {
		width: 100%;
		cursor: pointer;
		margin-bottom: 10px;
	}

	&.active {
		left: -280px;

		img {
			transform: translateX(0px);
		}
	}
`;

export default Markers;

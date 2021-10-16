import React, { useState } from "react";
import arrowLegend from "../img/arrowLegend.svg";
import styled from "styled-components";
import Marker from "./Marker";

const Legend = () => {
	const [openLegend, setLegend] = useState(true);

	const openHandler = () => {
		setLegend(!openLegend);
	};

	return (
		<StyledLegend>
			<PointsHolder className={openLegend ? "" : "active"}>
				<Point>
					<p>info</p>
					<Marker color="black"></Marker>
				</Point>
				<Point>
					<p>info2</p>
					<Marker color="black"></Marker>
				</Point>
				<Point>
					<p>info3</p>
					<Marker color="black"></Marker>
				</Point>
				<Point>
					<p>info4</p>
					<Marker color="black"></Marker>
				</Point>
				<Point>
					<p>info5</p>
					<Marker color="black"></Marker>
				</Point>
			</PointsHolder>
			<Closable onClick={openHandler} className={openLegend ? "" : "active"}>
				<h4>Name here etc</h4>
				<img src={arrowLegend} alt="arrow" />
			</Closable>
		</StyledLegend>
	);
};

const StyledLegend = styled.div`
	background-color: white;
	overflow: hidden;
`;

const Closable = styled.div`
	border-top: 1px solid lightgrey;
	display: flex;
	justify-content: space-between;
	width: 200px;
	padding: 7px;

	h4 {
		font-size: 0.9rem;
		font-weight: 400;
	}

	img {
		transition: 1s all;
		transform: rotate(-90deg);
		width: 20px;
	}

	&.active {
		/* padding: 0; */
		transform: translateY(-200px);
	}
`;

const PointsHolder = styled.div`
	padding: 10px;
	transition: 1s all;

	&.active {
		/* padding: 0; */
		transform: translateY(-200px);
	}
`;

const Point = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;
	width: 100%;

	svg {
		width: auto !important;
	}
`;

export default Legend;

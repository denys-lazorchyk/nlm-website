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
		<StyledLegend className={openLegend ? "" : "active"}>
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
				<h4>Legenda pzepływu</h4>
				<img src={arrowLegend} alt="arrow" />
			</Closable>
		</StyledLegend>
	);
};

const StyledLegend = styled.div`
	background-color: white;
	overflow: hidden;
	transition: 0.9s all;
	height: 220px;

	&.active {
		height: 35px;
	}
`;

const Closable = styled.div`
	border-top: 1px solid lightgrey;
	display: flex;
	justify-content: space-between;
	background-color: white;
	width: 200px;
	padding: 7px;
	transition: 0.9s all;
	height: 30px;
	z-index: 27 !important;

	h4 {
		font-size: 0.9rem;
		font-weight: 400;
	}

	img {
		transition: 0.9s all;
		transform: rotate(-90deg);
		width: 20px;
	}

	&.active {
		max-height: 30px;
		padding: 7px;
		transform: translateY(-20px);

		img {
			transform: rotate(90deg);
		}
	}
`;

const PointsHolder = styled.div`
	padding: 10px;
	transition: 0.9s all;
	max-height: 180px;
	opacity: 1;

	&.active {
		/* max-height: 20px; */
		opacity: 0;
		max-height: 0px;
		/* padding: 0; */
		transform: translateY(-150px);
	}
`;

const Point = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;
	width: 100%;
	z-index: 15;

	svg {
		width: auto !important;
	}
`;

export default Legend;

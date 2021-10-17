import React, { useState } from "react";
import arrowLegend from "../img/arrowLegend.svg";
import styled from "styled-components";
import Marker from "./Marker";

const Legend = ({ data, colors, title, square }) => {
	const [openLegend, setLegend] = useState(false);

	const openHandler = () => {
		setLegend(!openLegend);
	};

	const heightDiv = (data.length + 1) * 42;

	return (
		<StyledLegend
			style={{ height: `${heightDiv}px` }}
			className={openLegend ? "" : "active"}
		>
			<Wow
				className={openLegend ? "" : "active"}
				style={{ height: `${heightDiv - 42}px` }}
			>
				<PointsHolder>
					{data.map((item, index) => {
						return (
							<Point>
								<p>{item}</p>
								{!square ? (
									<Marker color={colors[index]}></Marker>
								) : (
									<Square style={{ backgroundColor: colors[index] }} />
								)}
							</Point>
						);
					})}
				</PointsHolder>
				<Closable onClick={openHandler}>
					<h4>{title}</h4>
					<img src={arrowLegend} alt="arrow" />
				</Closable>
			</Wow>
		</StyledLegend>
	);
};

const StyledLegend = styled.div`
	overflow: hidden;
	margin: 0px 10px;
	transition: 1s all;
	&.active {
		height: 50px !important;
	}

	@media (max-width: 1000px) {
		width: 300px;

		&.active {
			height: auto;
			padding-bottom: 30px;
		}
	}
`;

const Square = styled.div`
	height: 15px;
	width: 15px;
	margin-left: 10px;
`;

const Wow = styled.div`
	background-color: white;
	transition: 1s all;

	&.active {
		transform: translateY(-100%);
		img {
			transform: rotate(90deg);
		}
	}
`;

const Closable = styled.div`
	border-top: 1px solid lightgrey;
	display: flex;
	justify-content: center;
	background-color: white;
	padding: 7px;
	transition: 0.9s all;
	min-width: 170px;

	h4 {
		font-size: 0.8rem;
		font-weight: 400;
		padding-right: 10px;
		padding-top: 5px;
	}

	img {
		transition: 0.9s all;
		transform: rotate(-90deg);
		width: 20px;
	}

	@media (max-width: 1000px) {
		justify-content: right;
		padding-right: 20px;
		h4 {
			font-size: 0.9rem;
		}
	}
`;

const PointsHolder = styled.div`
	background-color: white;
	padding: 5px 10px;
	transition: 0.9s all;
	opacity: 1;
`;

const Point = styled.div`
	display: flex;
	align-items: center;
	justify-content: end;
	width: 100%;
	z-index: 15;
	min-height: 41px;
	width: auto;

	p {
		font-size: 0.6rem;
		padding-right: 5px;
	}

	@media (max-width: 1000px) {
		p {
			font-size: 0.8rem;
		}
	}
`;

export default Legend;

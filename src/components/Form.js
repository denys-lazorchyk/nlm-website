import React, { useState } from "react";
import Markers from "./Markers";
import Legends from "./Legends";
import styled from "styled-components";
import arrow from "../img/arrow.svg";

import { clikedAction } from "../actions/clikedAction";
import { placesAction } from "../actions/placesAction.js";
import { setType, setTitle, setAmount } from "../actions/inputActions";

import { useSelector, useDispatch } from "react-redux";

const Form = () => {
	const [openMenu, setMenu] = useState(false);

	const dispatch = useDispatch();
	const { title } = useSelector((state) => state.input);
	const { type } = useSelector((state) => state.input);
	const { amount } = useSelector((state) => state.input);
	const clicked = useSelector((state) => state.clicked);

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

	const arrowHandler = () => {
		setMenu(!openMenu);
	};

	const handleChangeTitle = (e) => {
		dispatch(setTitle(e.target.value));
	};

	const handleChangeType = (e) => {
		dispatch(setType(e.target.value));
	};

	const handleChangeAmount = (e) => {
		dispatch(setAmount(+e.target.value));
	};

	const clearInput = () => {
		dispatch(setTitle(""));
		dispatch(setType(""));
		dispatch(setAmount(""));
	};

	const submitHandler = () => {
		if (title && type && amount && clicked.clicked) {
			dispatch(
				placesAction({
					lat: clicked.clicked.lat,
					lng: clicked.clicked.lng,
					data: {
						type: type,
						amount: amount,
						title: title,
						color: colors[type],
					},
				})
			);

			dispatch(clikedAction(null));
		}
	};

	return (
		<>
			<StyledForm className={openMenu ? "active" : ""}>
				<MarkersHolder>
					<Markers open={openMenu}></Markers>
				</MarkersHolder>
				<Open className={openMenu ? "active" : ""}>
					<img
						className="open"
						src={arrow}
						alt="open/close arrow"
						onClick={arrowHandler}
					/>
					<h3>Przepływomierz</h3>
				</Open>
				<Instructions>
					<h4>Instrukcja:</h4>
					<p>
						Wypełnij dane i kliknij przycisk <span>dodaj punkt</span>. Następnie
						wybierz punktna mapiei kliknij <span>zatwierdź</span>
					</p>
				</Instructions>
				<InputPlace>
					<h4>Doday nowy przepływomierz:</h4>

					<label htmlFor="eventTitle">Nazwa:</label>
					<input
						type="text"
						id="eventTitle"
						placeholder="Przykładowa nazwa"
						value={title}
						onChange={handleChangeTitle}
					/>

					<label htmlFor="eventType">Typ:</label>
					<select
						name="cars"
						id="eventType"
						value={type}
						onChange={handleChangeType}
					>
						<option value="przeplyw1">Przeplyw nieznany</option>
						<option value="przeplyw2">Przeplyw - SUW/ZUW</option>
						<option value="przeplyw3">Przeplyw - Zbiornik</option>
						<option value="przeplyw4">Przeplyw międzystrefowy</option>
						<option value="sprzedaż1">Sprzedaż - Online</option>
						<option value="sprzedaż2">Sprzedaż - odczyt co 12h</option>
						<option value="sprzedaż3">Sprzedaż - odczyt ręczny</option>
						<option value="przeplyw5">Przeplyw wirtualny</option>
					</select>

					<label htmlFor="water">Średnia watrość Przepływu [m3/dzień]</label>
					<input
						type="number"
						id="water"
						placeholder="100"
						value={amount}
						onChange={handleChangeAmount}
					/>
				</InputPlace>
				<Buttons>
					<button className="clean" onClick={clearInput}>
						Wyczyść
					</button>
					<button className="submit" type="submit" onClick={submitHandler}>
						Zatwierdź
					</button>
				</Buttons>
				<LegendsHolder>
					<Legends></Legends>
				</LegendsHolder>
			</StyledForm>
		</>
	);
};

const StyledForm = styled.div`
	position: absolute;
	top: 70px;
	right: 0;
	z-index: 27;
	width: 300px;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	background-color: white;
	border-left: 1px solid lightgrey;
	transition: 1s all;

	h4 {
		margin-bottom: 10px;
	}

	&.active {
		width: 380px;
		right: -300px;
		padding-left: 80px;
	}

	@media (max-width: 1000px) {
		overflow-y: scroll;

		&.active {
			width: 380px;
			right: -330px;
			padding-left: 80px;

			img {
				transform: translateX(-95px) rotate(180deg);
			}
		}
	}
`;

const Open = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	width: 100%;
	padding: 20px 10px;
	border-bottom: 1px solid lightgrey;
	height: 70px;

	img {
		fill: green;
		transition: 1s all;
		cursor: pointer;
	}

	h3 {
		margin-right: 30px;
	}

	&.active {
		img {
			transform: translateX(-80px) rotate(180deg);
		}
	}

	@media (max-width: 1000px) {
		&.active {
			img {
				transform: translateX(-95px) rotate(180deg);
			}
		}
	}
`;

const Instructions = styled.div`
	padding: 20px;
	border-bottom: 1px solid lightgrey;

	p {
		font-size: 0.8rem;
		span {
			color: #5197f1;
		}
	}
`;

const InputPlace = styled.div`
	width: 100%;
	padding: 20px;

	label {
		margin-top: 10px;
		display: block;
		width: 100%;
		font-size: 0.6rem;
		font-weight: 400;
		color: #adadad;
	}

	input,
	select {
		outline: none;
		border: none;
		padding: 5px;
		border-bottom: 1px solid grey;
		margin-bottom: 10px;
		color: #0b284e;
		width: 100%;
	}

	input::placeholder,
	select::placeholder {
		color: #0b284e;
	}
`;

const Buttons = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0px 20px;

	button {
		width: 45%;
		height: 35px;
		background-color: none;
		font-size: 0.9rem;
		font-weight: 600;
		border-radius: 7px;
		cursor: pointer;
		border: 2px solid #5197f1;
		transition: 0.3s all;
		box-shadow: 0px 3px 3px lightgrey;
	}

	.clean {
		background-color: white;
		color: #5197f1;
	}

	.clean:hover,
	.submit:hover {
		transform: scale(1.01);
		box-shadow: 0px 4px 4px lightgrey;
	}

	.submit {
		background-color: #5197f1;
		color: white;
	}
`;

const MarkersHolder = styled.div`
	position: relative;
`;

const LegendsHolder = styled.div`
	position: relative;
`;

export default Form;

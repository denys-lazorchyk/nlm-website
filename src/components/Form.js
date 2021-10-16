import React, { useState } from "react";
import Markers from "./Markers";
import styled from "styled-components";
import arrow from "../img/arrow.svg";

const Form = () => {
	let [openMenu, setMenu] = useState(false);
	let [title, setTitle] = useState("");
	let [type, setType] = useState("");
	let [amount, setAmount] = useState("");

	const arrowHandler = () => {
		setMenu(!openMenu);
	};

	const handleChangeTitle = (e) => {
		setTitle(e.target.value);
	};

	const handleChangeType = (e) => {
		setType(e.target.value);
	};

	const handleChangeAmount = (e) => {
		setAmount(+e.target.value);
	};

	const clearInput = () => {
		setTitle("");
		setType("");
		setAmount("");
	};

	return (
		<>
			<StyledForm className={openMenu ? "active" : ""}>
				<MarkersHolder>
					<Markers open={openMenu}></Markers>
				</MarkersHolder>
				<Open>
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
						<option value="sprzedaż1">Sprzedaż - Oline</option>
						<option value="sprzedaż2">Sprzedaż - odczyt co 12h</option>
						<option value="sprzedaż3">Sprzedaż - odczyt ręczny</option>
						<option value="przeplyw5" selected>
							Przeplyw wirtualny
						</option>
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
					<button className="submit" type="submit">
						Zatwierdź
					</button>
				</Buttons>
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

		img {
			transform: translateX(-80px);
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
		transform: rotate(180deg);
		cursor: pointer;
	}

	h3 {
		margin-right: 30px;
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
export default Form;

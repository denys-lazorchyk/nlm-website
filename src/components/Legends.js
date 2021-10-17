import React from "react";
import Legend from "./Legend";
import styled from "styled-components";

const Legends = () => {
	const data1 = [
		"Przeplyw nieznany",
		"Przeplyw - SUW/ZUW",
		"Przeplyw - Zbiornik",
		"Przeplyw międzystrefowy",
		"Sprzedaż - Online",
		"Sprzedaż - odczyt co 12h",
		"Sprzedaż - odczyt ręczny",
		"Przeplyw wirtualny",
	];

	const colors1 = [
		"#B9B9B9",
		"#01D404",
		"#D45202",
		"#0B4566",
		"#000000",
		"#01D29C",
		"#BB03D7",
		"#780000",
	];

	const data2 = ["brak", 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

	const colors2 = [
		"#DBE4E9",
		"#4DFF4D",
		"#5FE645",
		"#71CC3E",
		"#82B336",
		"#94992E",
		"#A68027",
		"#B8661F",
		"#CA4C17",
		"#DB330F",
		"#ED1908",
		"#FF0000",
	];

	return (
		<StyledLegends>
			<Legend
				data={data2}
				colors={colors2}
				title="Legenda stref"
				square={true}
			></Legend>
			<Legend data={data1} colors={colors1} title="Legenda pzepływu"></Legend>
		</StyledLegends>
	);
};

const StyledLegends = styled.div`
	position: absolute;
	display: flex;
	z-index: 27 !important;
	top: -450px;
	right: 300px;

	@media (max-width: 1000px) {
		flex-direction: column;
		position: relative;
		width: 100%;
		top: 20px;
		left: 0px;
		width: 100%;
		padding-bottom: 80px;
	}
`;

export default Legends;

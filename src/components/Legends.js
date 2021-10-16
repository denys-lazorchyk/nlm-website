import React from "react";
import Legend from "./Legend";
import styled from "styled-components";

const Legends = () => {
	return (
		<StyledLegends>
			<Legend></Legend>
		</StyledLegends>
	);
};

const StyledLegends = styled.div`
	position: absolute;
	display: flex;
	z-index: 27;
	top: 80px;
	right: 500px;
`;

export default Legends;

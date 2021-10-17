import React from "react";
import styled from "styled-components";
import logo4 from "../img/logo4.png";

const Nav = () => {
	return (
		<StyledNav>
			<div className="logo">
				<img src={logo4} alt="NLM original" />
			</div>
			<ul>
				<li>MAPA</li>
			</ul>
		</StyledNav>
	);
};

const StyledNav = styled.nav`
	position: absolute;
	top: 0;
	left: 0;
	height: 70px;
	width: 100%;
	display: flex;
	align-items: center;
	border-bottom: 2px solid lightgrey;

	.logo {
		width: 10%;
		height: 100%;

		img {
			height: 80%;
			margin: 10px 30px;
			cursor: pointer;
		}
	}

	ul {
		line-height: 100%;
		margin-left: 40%;
		transform: translateX(-50%);
	}
`;

export default Nav;

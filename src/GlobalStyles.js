import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        /* height: 100vh; */
        width: 100vw;
        overflow: hidden;
        font-family: 'Poppins', sans-serif;
        color: #0b284e
    }

    a, li {
        text-decoration: none;
        list-style: none;
    }

    h4 {
		font-size: 1rem;
	}
    
`;

export default GlobalStyles;

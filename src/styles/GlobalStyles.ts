import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
font-size: 1rem;
margin: 0;
}
:root {
    --color-white : #f8f8f8;
    --color-dark : #282424;
    --color-mid : #393535;
    --color-toggleBack : #ffb267;
    --color-back : #211D1D;
}
div {
    margin:0px; 
    padding:0px;
}

`;

export default GlobalStyle;

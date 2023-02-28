import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
 ${reset}
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
a {
        text-decoration: none;
        color: inherit;
    }
    input, button {
        background-color: transparent;
        border: none;
        outline: none;
    }
    button {
        cursor: pointer;
    }
    ol, ul, li {
        list-style: none;
    }
`;

export default GlobalStyle;

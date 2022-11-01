import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        width: 600px;
        max-width:600px;
        margin: 0 auto;
    }
    body > #__next{
        background-color:#edf0f5;
        height:100vh;
    }
`;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }
    body{
        max-width:600px;
        margin: 0 auto;
        padding: 0;
        box-sizing: border-box;
        height: 100%;
    }
    body > #__next{
        background-color:#edf0f5;
        height: 100%;
    }
`;

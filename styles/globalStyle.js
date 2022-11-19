import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    :root {
        --dark-cyan : #0E8784;
        --dark-grey-blue : #333d4b;
        --pale-orange : #fdd6ba;
        --light-cream : #fefcf7;
        --grey : #83888F;
        --bg-color-footer : #2C343E;
        --bg-card : #F4F1EB;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Fraunces', 'Barlow', sans-serif , serif;
    }

    html {
        background-color: var(--light-cream);
    }
`

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root{
    --primary: #4A46EB;
    --secondary: #753AFF;
    --darkBlue: #070747; 
    --darkPurple: #0E0034;
    --black-1: #0D121F;
    --black-2: #121826;
    --white-1: #F9EBE3ff;
    --gray: #64718A;
    --grey: var(--gray);
    --white: white;
    --black: black;
    --racoma-teal: #648480ff;
    --racoma-dark: #152332ff;
    --racoma-light: #F9EBE3ff;
    --racoma-khaki: #90836Bff;
    --racoma-navy: #394E54ff;
  }

  @font-face {
      font-weight: 700;
      font-family: SctoGroteskA;
      font-named-instance: "Bold";
      font-display: swap;
      src: url(/fonts/SctoGroteskA-Bold.d6497298.woff2) format("woff2");
  }

  @font-face {
      font-weight: 400;
      src: url("SctoGroteskA"),url(/fonts/SctoGroteskA-Medium.2ede3563.woff2) format("woff2");
      font-named-instance: "Medium";
      font-family: SctoGroteskA;
      font-display: swap;
  }

  @font-face {
      font-weight: 300;
      font-named-instance: "Regular";
      src: url(/fonts/SctoGroteskA-Regular.1e986128.woff2) format("woff2");
      font-family: SctoGroteskA;
      font-display: swap;
  }

  :root {
    --rem-base: 62.5%;
    --font-size-small: 1.1rem;
    --font-size-body: 1.4rem;
    --font-size-large: 1.8rem;
    --line-height-small: 1.14;
    --line-height-body: 1.4;
    --line-height-large: 1.45;
    --font-weight-regular: 300;
    --font-weight-medium: 400;
    --font-weight-bold: 700;
    --letter-spacing-small: -0.02em;
    --letter-spacing-body: -0.01em;
    --letter-spacing-large: -0.04em;
    --font-family: 'SctoGroteskA', Arial;
    --font-size-h1: 4rem;
    --font-size-h2: 4.2rem;
    --font-size-h3: 2.2rem;
    --font-size-h4: 2rem;
    --font-size-h5: 1.8rem;
    --font-size-h6: 1.6rem;
    --line-height-h1: 0.9;
    --line-height-h2: 1.1;
    --line-height-h3: 1.1;
    --line-height-h4: 1.2;
    --line-height-h5: 1.1;
    --line-height-h6: 1.1;
    --font-weight-h1: var(--font-weight-bold);
    --font-weight-h2: var(--font-weight-bold);
    --font-weight-h3: var(--font-weight-medium);
    --font-weight-h4: var(--font-weight-bold);
    --font-weight-h5: var(--font-weight-bold);
    --font-weight-h6: var(--font-weight-medium);
    --letter-spacing-h1: -0.05em;
    --letter-spacing-h2: -0.05em;
    --letter-spacing-h3: -0.035em;
    --letter-spacing-h4: -0.02em;
    --letter-spacing-h5: -0.02em;
    --letter-spacing-h6: -0.02em;
  }

  @media only screen and (min-width: 1920px) {
    :root {
        --rem-base:0.5vw;
    }
  }

@media only screen and (min-width: 1280px) {
    :root {
        --font-size-small: 1.4rem;
        --font-size-body: 1.8rem;
        --font-size-large: 2.2rem;
    }
}

@media only screen and (min-width: 1920px) {
    :root {
        --rem-base: 0.5vw
    }
}

@media only screen and (min-width: 480px) {
    :root {
        --font-size-h1: 4.6rem;
    }
}

@media only screen and (min-width: 1024px) {
    :root {
        --font-size-h1:6.25vw;
    }
}

@media only screen and (min-width: 1280px) {
    :root {
        --font-size-h2: 4.2rem;
        --font-size-h3: 3.8rem;
        --font-size-h4: 2.8rem;
        --font-size-h5: 2.2rem;
        --font-size-h6: 2.2rem;
    }
}

html {
    -webkit-font-smoothing: antialiased;
    font-size: var(--rem-base);
    font-feature-settings: normal;
    font-variant-ligatures: normal
}

body {
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
    font-family: var(--font-family);
    letter-spacing: var(--letter-spacing-body)
}

.body-small {
    font-size: var(--font-size-small);
    line-height: var(--line-height-small);
    letter-spacing: var(--letter-spacing-small)
}

.body-large {
    font-size: var(--font-size-large);
    line-height: var(--line-height-large);
    letter-spacing: var(--letter-spacing-large)
}

b,strong {
    font-weight: var(--font-weight-bold)
}

i {
    font-style: italic
}

sup {
    vertical-align: super;
    margin-left: .1rem;
    font-size: 50%
}

.h1,h1 {
    font-weight: var(--font-weight-h1);
    font-size: var(--font-size-h1);
    line-height: var(--line-height-h1);
    letter-spacing: var(--letter-spacing-h1)
}

.h2,h2 {
    font-weight: var(--font-weight-h2);
    font-size: var(--font-size-h2);
    line-height: var(--line-height-h2);
    letter-spacing: var(--letter-spacing-h2)
}

.h3,h3 {
    font-weight: var(--font-weight-h3);
    font-size: var(--font-size-h3);
    line-height: var(--line-height-h3);
    letter-spacing: var(--letter-spacing-h3)
}

.h4,h4 {
    font-weight: var(--font-weight-h4);
    font-size: var(--font-size-h4);
    line-height: var(--line-height-h4);
    letter-spacing: var(--letter-spacing-h4)
}

.h5,h5 {
    font-weight: var(--font-weight-h5);
    font-size: var(--font-size-h5);
    line-height: var(--line-height-h5);
    letter-spacing: var(--letter-spacing-h5)
}

.h6,h6 {
    font-weight: var(--font-weight-h6);
    font-size: var(--font-size-h6);
    line-height: var(--line-height-h6);
    letter-spacing: var(--letter-spacing-h6)
}

.meta {
    font-size: var(--font-size-small);
    line-height: var(--line-height-small);
    letter-spacing: -.02em;
    text-transform: uppercase
}
  
  body {
    min-height: 100vh;
    width: 100%;
    font-family: 'SctoGroteskA', Arial;
    font-weight: 300;
    background: var(--racoma-teal);
    color: var(--racoma-light);
    font-weight: var(--font-weight-medium);
    font-size: var(--font-size-body);
    line-height: var(--line-height-body);
    font-family: var(--font-family);
    letter-spacing: var(--letter-spacing-body)
  }
  a{
    text-decoration: none;
    color: var(--racoma-light);
  }
  .container{
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
  }
  img, svg{
    height: 100%;
    width: 100%;
  }
  li, ul{
    list-style: none;
  }


  
`;

export default GlobalStyles;

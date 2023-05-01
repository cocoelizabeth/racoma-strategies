import styled from 'styled-components';

export const HeroSectionStyles = styled.div`
  margin-top: 0;
  ${
    "" /* background-color: var(--racoma-teal);
  margin-top: 0;
  margin-bottom: var(--page-section);
  padding-right: var(--grid-padding);
  padding-left: var(--grid-padding); */
  }
  .container {
    height: 100%;
  }
  .hero__wrapper {
    position: relative;
    ${
      "" /* width: 100%;
    height: 100%;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
      background: linear-gradient(135deg, #030213, #08011c);
      z-index: -1; */
    }
    background-color: var(--racoma-teal);
    margin-top: 0;
    margin-bottom: var(--page-section);
    padding-right: var(--grid-padding);
    padding-left: var(--grid-padding);
  }
  .hero__wrapper .h2 {
    position: relative;
    padding-top: var(--page-intro-small);
    text-transform: uppercase;
  }

  .headlineText {
    text-transform: uppercase;
    width: 80%;
  }

  .subheadingText {
      display: block;
      line-height: 1.1;
      letter-spacing: -0.035em;
      ${'' /* margin-top: 4rem; */}
       margin-top: var(--grid-padding);
      text-transform: none;
      font-size: 3.2rem;
  }

  .heroCTA {
    margin-top: calc(var(--grid-gutter)*2)
  }

  @media only screen and (min-width: 1280px) {
    .headlineText {
      padding-bottom: 1em;
      font-size: 5.3vw;
    }
    .subheadingText {
      font-size: 4.2rem;
      padding-left: 40%;
    }
  }


    .left {
      width: 50%;
      padding: 50px 0;
      .hero__heading {
        max-width: 450px;
        font-size: 4rem;
        font-family: "Poppins", sans-serif;
        font-weight: "700";
        margin: 0.2rem 0;
      }
      .hero__text {
        max-width: 350px;
      }
      .hero__button {
        margin-top: 1.5rem;
      }
    }
    .right {
      position: absolute;
      right: 0;
      top: 0;
      width: 50%;
      height: 100%;
      .hero__image {
        width: 100%;
        height: 100%;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    .hero__wrapper {
      ${
        "" /* height: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column-reverse;
      padding-top: 80px;
      padding-bottom: 80px; */
      }
      &::after {
        width: 100%;
      }
      .right {
        position: initial;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        .hero__image {
          height: 300px;
          margin: 0 auto;
        }
      }
      .left {
        width: 100%;
        margin-top: 1rem;
        padding: 0;
        .hero__heading {
          max-width: 330px;
          font-size: 3rem;
        }
      }
    }
  }
`;

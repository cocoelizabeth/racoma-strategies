// import styled from 'styled-components';

// export const FooterStyles = styled.footer`
//   ${
//     "" /* padding-top: 6rem;
//   padding-bottom: 6rem; */
//   }
//   text-align: left;
//   background-color: var(--racoma-teal);
//   .footer__wrapper {
//     display: flex;
//     flex-direction: column;
//     padding-top: 2rem;
//     ${"" /* padding-bottom: 12rem; */}
//     width: 100%;
//     border-top: 1px solid var(--racoma-light);
//   }
//   .footer__logo {
//     height: 100%;
//     position: relative;
//     font-family: SctoGroteskA;
//     font-weight: bold;
//     line-height: 1.6rem;
//     text-transform: uppercase;
//   }

//   @media only screen and (min-width: 720px) {
//     .footer__wrapper {

//       flex-direction: row;
//       justify-content: space-between;
//       align-items: flex-end;
    

//       ${
//         "" /* padding-top: 12rem;
//       padding-bottom: 12rem; */
//       }
//     }
//   }

//   .header__logo div a {
//     ${"" /* width: 13.7rem; */}
//     height: 1.8rem;
//   }
//   .footer__text {
//     margin: 0 auto;
//     margin-top: 1rem;
//     max-width: 400px;
//   }
//   .footer__menuList {
//     margin-top: 1rem;
//     li {
//       display: inline-block;
//       margin: 0 1rem;
//       a {
//         color: var(--racoma-light);
//         font-size: 1.6rem;
//       }
//     }
//   }
//   .footer__socialList {
//     margin-top: 1.5rem;
//     li {
//       display: inline-block;
//       margin: 0 0.5rem;
//       a {
//         display: inline-block;
//         width: 20px;
//         color: var(--gray);
//       }
//       :hover {
//         a {
//           color: var(--white-1);
//         }
//       }
//     }
//   }
//   .copyright {
//     margin-top: 1rem;
//     color: var(--gray);
//     font-size: 1.2rem;
//   }

//   ${"" /* IMPORTED CONTACT SECTION STYLES */}
//   ${"" /* padding-top: var(--page-intro-small); */}
//   padding-bottom: var(--page-section);
//   ${"" /* padding-top: var(--page-section); */}

//   .contactSection__wrapper {
//     display: flex;
//     border-top: 1px solid var(--racoma-teal);
//     flex-direction: column;
//     padding-top: var(--page-intro-small);
//     padding-bottom: var(--page-intro-small);
//     ${"" /* justify-content: space-between; */}
//     width: 100%;
//     .headingWrapper {
//       width: 100%;
//     }
//     .textWrapper {
//       width: 100%;
//       p:first-of-type {
//         margin-bottom: 2rem;
//         margin-top: 2rem;
//       }
//     }
//   }

//   @media only screen and (min-width: 720px) {
//     .contactSection__wrapper {
//       flex-direction: row;
//       justify-content: space-between;
//       .col {
//         width: calc(100%/3);
//         display: flex;
//         flex-direction: column;
//         justify-content: space-between;
//       }
//       .right {
//         text-align: right;
//         position: relative;
  
//         ul {
//                 display: flex;
//                 flex-direction: column;
//           justify-content: flex-end;
          
//           position: absolute;
//           bottom: 0;
//           right: 0;
//         }
//         li {
//           padding-top: 1rem;
//         }
//           a {
//             text-decoration: underline;
     
//            align-self: flex-end;
//             ${"" /* float: right; */}
//           }
//         }
//       }
//       .headingWrapper {
//         padding-left: var(--grid-gutter)
//         span {
//           color: red;
//         }
//       }
//       .textWrapper {
        
//         p:first-of-type {
//           margin-top: 0px;
          
//         }
//       }
//     }
//   }
// `;


import styled from "styled-components";

export const FooterStyles = styled.footer`
  text-align: left;
  background-color: var(--racoma-teal);
  padding-bottom: var(--page-section);
  padding-bottom: var(--page-intro-small);
  border-top: 1px solid var(--racoma-light);
  .footer__wrapper {
    display: flex;
    flex-direction: column;
    ${'' /* padding-top: var(--page-intro-small); */}
    width: 100%;
    padding-top: calc(1.5rem + 2.5vw);

    .col {
      ${"" /* width: calc(100% / 3); */}
      margin-bottom: 3rem;
    }
    .footer__logo {
      height: 100%;
      position: relative;
      font-family: SctoGroteskA;
      font-weight: bold;
      line-height: 1.6rem;
      text-transform: uppercase;
    }
    .footer__contactLinks {
      text-decoration: underline;
      ul li a {
        line-height: 2rem;
      }
    }
    .footer__button {
    }
  }

  @media only screen and (min-width: 720px) {
    .footer__wrapper {
      padding-top: 2rem;
      flex-direction: row;
      justify-content: space-between;
      ${"" /* align-items: flex-end; */}
    }
  }

  .copyright {
    margin-top: 1rem;
    color: var(--gray);
    font-size: 1.2rem;
  }
`;
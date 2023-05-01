import styled from 'styled-components';

export const FooterStyles = styled.footer`
  padding-top: 6rem;
  padding-bottom: 6rem;
  text-align: left;
  background-color: var(--racoma-dark);
  .footer__wrapper {
    display: flex;
    flex-direction: column;
    padding-top: var(--page-intro-small)
    padding-bottom: 12rem;
    width: 100%;
  }
  .footer__logo {
    height: 100%;
    position: relative;
    font-family: SctoGroteskA;
    font-weight: bold;
    line-height: 1.6rem;
    text-transform: uppercase;
  }

  @media only screen and (min-width: 720px) {
    .footer__wrapper {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;

      ${
        "" /* padding-top: 12rem;
      padding-bottom: 12rem; */
      }
    }
  }

  .header__logo div a {
    ${"" /* width: 13.7rem; */}
    height: 1.8rem;
  }
  .footer__text {
    margin: 0 auto;
    margin-top: 1rem;
    max-width: 400px;
  }
  .footer__menuList {
    margin-top: 1rem;
    li {
      display: inline-block;
      margin: 0 1rem;
      a {
        color: var(--racoma-light);
        font-size: 1.6rem;
      }
    }
  }
  .footer__socialList {
    margin-top: 1.5rem;
    li {
      display: inline-block;
      margin: 0 0.5rem;
      a {
        display: inline-block;
        width: 20px;
        color: var(--gray);
      }
      :hover {
        a {
          color: var(--white-1);
        }
      }
    }
  }
  .copyright {
    margin-top: 1rem;
    color: var(--gray);
    font-size: 1.2rem;
  }
`;

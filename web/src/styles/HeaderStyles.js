import styled from 'styled-components';

export default styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  overflow: hidden;
  transition: background 0.3s ease-in-out;
  will-change: transform;
  .header__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: calc(1.5rem + 2.5vw) var(--grid-padding);
    width: 100%;
  }

  @media only screen and (min-width: 1280px) {
    .header__wrapper {
      padding-top: 5rem;
      padding-bottom: 5rem;
    }
  }

  .header__background {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -100;
    will-change: background-color, opacity;
    width: 100%;
    height: 100%;
    transition: background-color 0.65s cubic-bezier(0.72,0,0.28,1),
    opacity 0.65s; cubic-bezier(0.72,0,0.28,1);
  }

  .header__logo {
    height: 100%;
    position: relative;
  }

  .header__logo div a {
    ${"" /* width: 13.7rem; */}
    height: 1.8rem;
  }

  @media only screen and (min-width: 1280px) {
    .header__logo div a {
      ${"" /* width: 16rem; */}
      height: 2.2rem;
    }
  }




  .nav__wrapper {
    ul {
      display: flex;
      list-style: none;
      align-items: center;
      justify-content: center;
      ${"" /* gap: 1rem; */}
      li {
            padding: 0 1.5rem;
        &:hover {
          a {
            ${"" /* border-bottom: 1px solid var(--racoma-light); */}
            text-decoration: underline;
            text-underline-offset: .4rem;
          }
        }
        a {
          color: var(--racoma-light);
          display: inline-block;
          position: relative;
          text-decoration: none;
          vertical-align: middle;
          font-size: var(--font-size-small);
          text-transform: uppercase;
          font-size: 10px;
        }
      }
    }
  }

  .header__cta {
    font-size: 9px;
  }

  .searchIcon {
    cursor: pointer;
    font-size: 25px;
    .searchIcon__wrapper {
      border-radius: 6px;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--black-2);
    }
  }
  .mobileMenuCloseBtn,
  .mobileNavBg,
  .mobileIcon,
  .mobileMenuBtn {
    display: none;
  }
  @media only screen and (max-width: 1023px) {
    .mobileMenuCloseBtn,
    .mobileNavBg,
    .mobileIcon,
    .mobileMenuBtn {
      display: initial;
    }
    .header__wrapper .header__cta.desktop {
      display: none;
    }
    .nav__wrapper {
      nav {
        z-index: 1002;
        position: fixed;
        top: 0;
        right: 0;
        ${"" /* width: 80%; */}
        width: 100%;
        transform: translateX(100%);
        background-color: var(--racoma-navy);
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 0.3s ease transform;
        ul {
          ${"" /* width: 90%; */}
          margin: 0 auto;
          flex-direction: column;
          li {
            display: block;
            margin: 0.5rem 0;
            &:hover {
              a {
              }
            }
            a {
              width: 100%;
              padding: 0.5rem 1rem;
              border-radius: 4px;
              display: inline-block;
              position: relative;
              left: -1rem;
              padding: .5rem 1rem;
              font-weight: var(--font-weight-bold);
              font-size: 1.8rem;
              line-height: 1;
              text-decoration: none;
              text-transform: uppercase
            }
            &.searchIcon {
              display: none;
            }
          }
        }
        .mobileMenuCloseBtn {
          color: var(--racoma-light);
          position: absolute;
          top: calc(1.5rem + 2.5vw);
          right: calc(1.5rem + 2.5vw);
        
          &:hover {
            color: var(--racoma-khaki);
          }
        }
      }
      &.open {
        height: calc(100vh - var(--grid-padding));
        nav {
          transform: translateX(0);
        }
      }
      .mobileNavBg {
        z-index: 1001;
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        transition: opacity 0.6s linear 0s;
        background: rgba(0, 0, 0, 0.5);
      }
    }
    .mobileIcon {
      display: flex;
      gap: 1rem;
      height: 100;
      align-items: center;
      justify-content: center;
    }
    .mobileMenuBtn {
      font-size:10px;
    }
  }
`;

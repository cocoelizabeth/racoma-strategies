import { Link } from 'gatsby';
import styled from 'styled-components';
import { buttonTypes } from '../../constants/buttonTypes';

export const ButtonStyles = styled(Link)`
  display: inline-flex;
  position: relative;
  align-items: center;
  transform: translateZ(0);
  transition: border-color var(--rs-time-transition-650) var(--ease-out),
    color var(--rs-time-transition-250) var(--ease-out);
  border: 0.1rem solid;
  cursor: pointer;
  border-radius: 1.6rem;
  padding: 0.2rem 3rem 0;
  overflow: hidden;
  color: currentColor;
  font-weight: var(--font-weight-bold);
  font-size: 1.1rem;
  line-height: 2.8rem;
  line-height: 2.8rem;
  letter-spacing: -0.02em;
  text-decoration: none;
  text-transform: uppercase;
  white-space: nowrap;
  background: transparent;
  border: 0.1rem solid;
  border-color: ${({ variant }) =>
    variant === buttonTypes.primaryLight
      ? "var(--racoma-light)"
      : variant === buttonTypes.secondaryLight
      ? "var(--racoma-teal)"
      : variant === buttonTypes.primaryDark
      ? "var(--racoma-dark)"
      : variant === buttonTypes.secondaryDark
      ? "var(--racoma-teal)"
      : variant === buttonTypes.primaryFilled
      ? "var(--racoma-teal)"
      : "var(--racoma-light)"};
  color: ${({ variant }) =>
    variant === buttonTypes.primaryLight
      ? "var(--racoma-light)"
      : variant === buttonTypes.secondaryLight
      ? "var(--racoma-teal)"
      : variant === buttonTypes.primaryDark
      ? "var(--racoma-dark)"
      : variant === buttonTypes.secondaryDark
      ? "var(--racoma-teal)"
      : variant === buttonTypes.primaryFilled
      ? "var(--racoma-light)"
      : "var(--racoma-light)"};
  background-color: ${({ variant }) =>
    variant === buttonTypes.primaryLight
      ? "var(--racoma-teal)"
      : variant === buttonTypes.secondaryLight
      ? "var(--racoma-light)"
      : variant === buttonTypes.primaryDark
      ? "var(--racoma-dark)"
      : variant === buttonTypes.secondaryDark
      ? "var(--racoma-dark)"
      : variant === buttonTypes.primaryFilled
      ? "var(--racoma-teal)"
      : "var(--racoma-light)"};
  :hover:not(:disabled) {
    background-color: ${({ variant }) =>
      variant === buttonTypes.primaryLight
        ? "var(--racoma-light)"
        : variant === buttonTypes.secondaryLight
        ? "var(--racoma-teal)"
        : variant === buttonTypes.primaryDark
        ? "var(--racoma-light)"
        : variant === buttonTypes.secondaryDark
        ? "var(--racoma-teal)"
        : variant === buttonTypes.primaryFilled
        ? "var(--racoma-navy)"
        : "var(--racoma-light)"};
  }

  @media only screen and (max-width: 768px) {
    ${
      "" /* padding: 0.8rem 1.2rem;
    font-size: 1.4rem; */
    }
  }
`;

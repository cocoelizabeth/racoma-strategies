import styled from "styled-components";

export const ContactSectionStyles = styled.div`
  background-color: var(--racoma-teal);
  color: var(--racoma-light);
  padding-top: var(--page-intro-small);
  padding-bottom: var(--page-section);
  padding-top: var(--page-section);

  .contactSection__wrapper {
    display: flex;
    flex-direction: column;
    ${"" /* justify-content: space-between; */}
    width: 100%;
    .headingWrapper {
      width: 100%;
    }
    .textWrapper {
      width: 100%;
      p:first-of-type {
        margin-bottom: 2rem;
        margin-top: 2rem;
      }
    }
  }

  @media only screen and (min-width: 720px) {
    .contactSection__wrapper {
      flex-direction: row;
      .headingWrapper {
        width: 33%;
      }
      .textWrapper {
        width: 66%;
        p:first-of-type{
            margin-top: 0px;
        }
      }
    }
  }
`;

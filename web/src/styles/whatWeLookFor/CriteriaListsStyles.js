import styled from "styled-components";

export const CriteriaListsStyles = styled.div`
  background-color: var(--racoma-teal);
  color: var(--racoma-light);
  padding-top: var(--page-intro-small);
  padding-bottom: calc(var(--page-intro-small) - 2rem);
  border-bottom: 1px solid var(--racoma-light);
  width: 100%;
  .criteriaListContainer {
    padding-top: 6rem;
    padding-bottom: 6rem;
    display: flex;
    flex-direction: column;
    border-top: 1px solid var(--racoma-light);
    .categoryTitle {
      text-transform: uppercase;
      padding-bottom: 4rem;
    }
    .criteriaListText {
      font-size: var(--font-size-large);
      line-height: var(--line-height-large);
      letter-spacing: var(--letter-spacing-large);
      padding-right: var(--grid-padding);
      p {
        margin-bottom: 2rem;
        
        ${'' /* ::before {
          content: "✓";
          margin-right: 1.5rem;
        } */}
      }
    }
  }

  @media only screen and (min-width: 720px) {
    .criteriaListContainer {
      padding-top: 10.3rem;
      padding-bottom: 10.3rem;
      flex-direction: row;
      .categoryTitle,
      .criteriaListText {
        width: 50%;
      }
    }
  }

  @media only screen and (min-width: 1280px) {
    .criteriaListContainer {
      .categoryTitle {
      }
      .criteriaListText {
      }
    }
  }

  .contentSection__grid_row {
    grid-template-columns: 100%;
    p {
      margin-bottom: 2rem;
      strong {
        text-transform: uppercase;
      }
    }
    p:last-child,
    p p:lastchild {
      padding-bottom: 2rem;
    }

    .contentSection_smallHeading {
      padding-top: 4rem;
      border-bottom: 1px solid var(--racoma-teal);
      margin-right: calc(var(--grid-gutter) * 2);
    }
  }

  @media only screen and (min-width: 720px) {
    .contentSection__grid_row {
      display: grid;
      grid-template-columns: 25% 1fr 1fr;
      grid-template-areas:
        "heading1 heading2 heading3"
        "body1 body2 body3";

      ${
        "" /* grid-column-gap: calc(var(--grid-gutter) * 2);
      column-gap: calc(var(--grid-gutter) * 8); */
      }
      padding: calc(var(--grid-gutter) * 3);
      padding-left: 0;
      padding-right: 0;
      .contentSection_smallHeading {
        border-top: none;
        padding-top: 0px;
      }
      p {
        margin-bottom: 2rem;
        padding-right: calc(var(--grid-gutter) * 1);

        strong {
          font-weight: var(--font-weight-h5);
          font-size: var(--font-size-h5);
          line-height: var(--line-height-h5);
          letter-spacing: var(--letter-spacing-h5);
          text-transform: uppercase;
        }
        :first-child {
          grid-area: heading1;
          column: 1;
        }
        :nth-child(2) {
          grid-area: body1;
          column: 1;
          ${
            "" /* p::before {
            content: "✓ ";
            height: 10px;
            width: 10px;
          } */
          }
        }
        :nth-child(3) {
          grid-area: heading2;
          column: 2;
        }
        :nth-child(4) {
          grid-area: body2;
          column: 2;
        }
      }
    }
  }
`;
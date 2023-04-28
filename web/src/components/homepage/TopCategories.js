import React from 'react'
import { TopCategoriesStyles } from '../../styles/homePage/TopCategoriesStyles'
import { SectionTitle } from '../typography/Title'
import ParagraphText from '../typography/ParagraphText';
import { graphql, useStaticQuery } from 'gatsby';
import CategoryGrid from '../category/CategoryGrid';

function TopCategories() {
const data = useStaticQuery(graphql`
  {
    allSanityFeatured(filter: { _id: { eq: "featuredItems" } }) {
      nodes {
        categories {
          id
          title
          _rawDescription
          slug {
              current
            }
          coverImage {
            alt
            asset {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`);
    const categories = data.allSanityFeatured.nodes[0].categories;

  return (
    <TopCategoriesStyles>
      <SectionTitle>Top Categories</SectionTitle>
      <ParagraphText className="info">Lorem Impsum sdjfald</ParagraphText>
      <CategoryGrid categories={categories}></CategoryGrid>
    </TopCategoriesStyles>
  );
}

export default TopCategories

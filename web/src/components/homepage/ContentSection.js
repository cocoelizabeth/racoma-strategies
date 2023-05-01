import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { FeaturedBlogsStyles } from '../../styles/homePage/FeaturedBlogsStyles'
import { SectionTitle } from '../typography/Title';
import ParagraphText from '../typography/ParagraphText';
import BlogGrid from '../blog/BlogGrid';


function ContentSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityHome {
        nodes {
          contentSection {
            _rawIntroText
            excerpt1 {
              headerText
              _rawSubText
              link
              cta
              _key
            }
            excerpt2 {
              headerText
              _rawSubText
              link
              cta
              _key
            }
            excerpt3 {
              _key
              _rawSubText
              cta
              headerText
              link
            }
            excerpt4 {
              _key
              cta
              headerText
              link
              _rawSubText
            }
          }
        }
      }
    }
  `);
  
  const content = data.allSanityHome.nodes[0].contentSection;

  return (
    <FeaturedBlogsStyles>
      <SectionTitle>Featured Blogs</SectionTitle>
      <ParagraphText className="featuredBlogs__text">Ldkljsdlfjsdkfsldfksdfdls</ParagraphText>
      {/* <BlogGrid blogs={featuredBlogs} /> */}
    </FeaturedBlogsStyles>
  );

}

export default ContentSection;

import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import { SectionTitle } from '../typography/Title';
import ParagraphText from '../typography/ParagraphText';
import BlogGrid from '../blog/BlogGrid';
import { ContentSectionStyles } from '../../styles/homePage/ContentSectionStyles';
import MyPortableText from '../MyPortableText';
import Button from '../buttons/Button';
import TextBlockCTAItem from './TextBlockCTAItem';
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
  const contentBlocks = [content.excerpt1, content.excerpt2, content.excerpt3, content.excerpt4]
    const contentBlockItems = contentBlocks.map((item)=> {
 
      return (
        <TextBlockCTAItem 
          headerText={item.headerText}
          _rawSubText={item._rawSubText}
          cta={item.cta}
          link={item.link}
          _key={item._key}
        ></TextBlockCTAItem>
      )
    })

  return (
    <ContentSectionStyles>
      <section>
        <div className="contentSection__introText h3">
          <MyPortableText value={content._rawIntroText}></MyPortableText>
        </div>
        {/* <div className="contentSection__grid">
          {contentBlockItems}
        </div> */}
        <div className="contentSection__grid_row">
          <p className="contentSection_smallHeading">
            <strong>{content.excerpt1.headerText}</strong>
          </p>
          <MyPortableText value={content.excerpt1._rawSubText}></MyPortableText>
          <p className="contentSection__cta">
            <Button
              to={content.excerpt1.link}
              tag={Link}
              variant="primaryFilled"
            >
              {content.excerpt1.cta}
            </Button>
          </p>
          {/* BLOCK 2 */}

          <p className="contentSection_smallHeading">
            <strong>{content.excerpt2.headerText}</strong>
          </p>
          <MyPortableText value={content.excerpt2._rawSubText}></MyPortableText>
          <p className="contentSection__cta">
            <Button
              to={content.excerpt2.link}
              tag={Link}
              variant="primaryFilled"
            >
              {content.excerpt2.cta}
            </Button>
          </p>
        </div>
        <div className="contentSection__grid_row">
          <p className="contentSection_smallHeading">
            <strong>{content.excerpt3.headerText}</strong>
          </p>
          <MyPortableText value={content.excerpt3._rawSubText}></MyPortableText>
          <p className="contentSection__cta">
            <Button
              to={content.excerpt3.link}
              tag={Link}
              variant="primaryFilled"
            >
              {content.excerpt3.cta}
            </Button>
          </p>
          {/* BLOCK 2 */}

          <p className="contentSection_smallHeading">
            <strong>{content.excerpt4.headerText}</strong>
          </p>
          <MyPortableText value={content.excerpt4._rawSubText}></MyPortableText>
          <p className="contentSection__cta">
            <Button
              to={content.excerpt4.link}
              tag={Link}
              variant="primaryFilled"
            >
              {content.excerpt4.cta}
            </Button>
          </p>
        </div>
        {/* <BlogGrid blogs={featuredBlogs} /> */}
      </section>
    </ContentSectionStyles>
  );

}

export default ContentSection;
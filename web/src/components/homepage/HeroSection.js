import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import MyPortableText from '../MyPortableText';
import Button from '../buttons/Button';

function HeroSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityHome {
        nodes {
          hero {
            headlineText
            _rawSubHeadlineText
            cta
            link
          }
        }
      }
    }
  `);

  const { hero } = data.allSanityHome.nodes[0];

  return (
    <HeroSectionStyles>
      <section>
        <div className="hero__wrapper">
          <div className="headlineText h2"></div>
          {/* <div className="headlineText h2">
            <h1>{hero.headlineText}</h1>
          </div> */}

          <div className="subheadingText">
            <MyPortableText
              className="subheadingText__text"
              value={hero._rawSubHeadlineText}
            />
            <span className="placeholder"></span>
            <Button to={hero.link} tag={Link} className="heroCTA">
              {hero.cta}
            </Button>
          </div>
        </div>
        <div className="lineBreakContainer">
          {/* <div className="lineBreak"></div> */}
        </div>
      </section>
      {/* <div className="hero__wrapper">
        <div className="left">
          <Title>{hero.headlineText}</Title>
          <MyPortableText
            className=""
            value={hero._rawSubHeadlineText}
          ></MyPortableText>
          <Button to={hero.link} tag={Link}>
            {hero.cta}
          </Button>
        </div> */}
      {/* <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/vr-guy.jpg"
              alt="vr guy"
              placeholder="blurred"
              objectPosition="50% 30%"
            />
          </div> */}
      {/* </div> */}
    </HeroSectionStyles>
  );
}

export default HeroSection;

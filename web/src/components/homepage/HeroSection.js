import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import { Title } from '../typography/Title';
import ParagraphText from '../typography/ParagraphText';
import  MyPortableText from '../MyPortableText'
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

  const hero = data.allSanityHome.nodes[0].hero;
  console.log("HERO")
  console.log(hero)
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <Title>{hero.headlineText}</Title>
            <MyPortableText
              className=""
              value={hero._rawSubHeadlineText}
            ></MyPortableText>
            <Button to={hero.link} tag={Link}>
              {hero.cta}
            </Button>
            <br />
            <br />
            <Button to="/get-an-offer" tag={Link} variant="secondaryLight">
              Secondary Light
            </Button>
            <br />
            <br />
            <Button to="/get-an-offer" tag={Link} variant="primaryDark">
              Primary Dark
            </Button>
            <br />
            <br />
            <Button to="/get-an-offer" tag={Link} variant="secondaryDark">
              Secondary Dark
            </Button>
          </div>
          <div className="right">
            <StaticImage
              className="hero__image"
              src="../../images/vr-guy.jpg"
              alt="vr guy"
              placeholder="blurred"
              objectPosition="50% 30%"
            />
          </div>
        </div>
      </div>
    </HeroSectionStyles>
  );
}

export default HeroSection;

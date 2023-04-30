import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { HeroSectionStyles } from '../../styles/homePage/HeroSectionStyles';
import ParagraphText from '../typography/ParagraphText';
import Button from '../buttons/Button';

function HeroSection() {
  return (
    <HeroSectionStyles>
      <div className="container">
        <div className="hero__wrapper">
          <div className="left">
            <h1 className="hero__heading">
              A Search Fund looking to acquire & operate one great business.
            </h1>
            <ParagraphText className="hero__text">
              Curious about selling your business? Let’s see if we’re a good
              match.
            </ParagraphText>
            <Button to="/get-an-offer" tag={Link}>
              Primary Light
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

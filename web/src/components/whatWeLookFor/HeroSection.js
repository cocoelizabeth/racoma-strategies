import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { HeroSectionStyles } from "../../styles/whatWeLookFor/HeroSectionStyles";
import MyPortableText from "../MyPortableText";
import Button from "../buttons/Button";

function HeroSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityWhatWeLookFor {
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

  const { hero } = data.allSanityWhatWeLookFor.nodes[0];

  return (
    <HeroSectionStyles>
      <section>
        <div className="hero__wrapper">
          <div className="headlineText h2">{hero.headlineText}</div>
          <div className="subheadingText">
            <MyPortableText className="criteraList" value={hero._rawSubHeadlineText} />
            {/* <Button to={hero.link} tag={Link} className="heroCTA">
              {hero.cta}
            </Button> */}
          </div>
        </div>
      </section>
    </HeroSectionStyles>
  );
}

export default HeroSection;

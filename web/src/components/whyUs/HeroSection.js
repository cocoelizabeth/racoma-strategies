import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { HeroSectionStyles } from "../../styles/whyUs/HeroSectionStyles";
import MyPortableText from "../MyPortableText";
import Button from "../buttons/Button";

function HeroSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityWhyUs {
        nodes {
          hero {
            headerText
            _rawSubText
          }
        }
      }
    }
  `);

  const { hero } = data.allSanityWhyUs.nodes[0];

  return (
    <HeroSectionStyles>
      <section>
        <div className="hero__wrapper">
          <div className="headlineText h2">{hero.headerText}</div>
          <div className="subheadingText">
            <MyPortableText
              className="criteraList"
              value={hero._rawSubText}
            />
          </div>
        </div>
      </section>
    </HeroSectionStyles>
  );
}

export default HeroSection;

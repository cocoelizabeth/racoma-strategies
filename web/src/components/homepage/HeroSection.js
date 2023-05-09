import React, { useRef, useEffect } from 'react';
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

  // const headlineRef = useRef();

  // useEffect(() => {
  //   const headlineElement = headlineRef.current;
  //   console.log(headlineElement);
  //   wordflick(headlineElement);
  // }, []);

  // const words = [hero.headlineText];
  // let part;
  // let i = 0;
  // let offset = 0;
  // const len = words.length;
  // let forwards = true;
  // let skip_count = 0;
  // const skip_delay = 15;
  // const speed = 45;

  // function wordflick() {
  //   setInterval(() => {
  //     if (forwards) {
  //       debugger;
  //       if (offset >= words[i].length) {
  //         ++skip_count;
  //         if (skip_count == skip_delay) {
  //           forwards = false;
  //           skip_count = 0;
  //         }
  //       }
  //     } else if (offset == 0) {
  //       forwards = true;
  //       i++;
  //       offset = 0;
  //       if (i >= len) {
  //         i = 0;
  //       }
  //     }
  //     part = words[i].substr(0, offset);
  //     if (skip_count == 0) {
  //       if (forwards) {
  //         offset++;
  //       } else {
  //         // offset--;
  //       }
  //     }
  //     if (headlineRef.current) {
  //       headlineRef.current.textContent = part;
  //     }
  //     // $('.word').text(part);
  //   }, speed);
  // }

  return (
    <HeroSectionStyles>
      <section>
        <div className="hero__wrapper">
          {/* <div ref={headlineRef} className="headlineText h2 word"></div> */}
          <div className="headlineText h2">{hero.headlineText}</div>
          {/* <div className="headlineText h2">
            <h1>{hero.headlineText}</h1>
          </div> */}

          <div className="subheadingText">
            <MyPortableText
              className="subheadingText__text"
              value={hero._rawSubHeadlineText}
            />
            <span className="placeholder" />
            <Button to={hero.link} tag={Link} className="heroCTA">
              {hero.cta}
            </Button>
          </div>
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

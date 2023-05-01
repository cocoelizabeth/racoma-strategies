import { graphql, useStaticQuery, Link } from 'gatsby';
import React from 'react';
import { SectionTitle } from '../typography/Title';
import ParagraphText from '../typography/ParagraphText';
import BlogGrid from '../blog/BlogGrid';
import { ContactSectionStyles } from '../../styles/homePage/ContactSectionStyles';
import MyPortableText from '../MyPortableText';
import Button from '../buttons/Button';
import TextBlockCTAItem from './TextBlockCTAItem';

function ContactSection() {
  const data = useStaticQuery(graphql`
    {
      allSanityHome {
        nodes {
            contact{
              headerText
              _rawSubText
              link
              cta
              _key
            }
          }
        }
      }
    
  `)
  ;
  
  const contact = data.allSanityHome.nodes[0].contact;
 



  return (
    <ContactSectionStyles>
      <section>
        {/* <div className="contactSection__introText h3">
          <MyPortableText value={contact._rawSubText}></MyPortableText>
        </div> */}
        <div className="contactSection__wrapper">
          <div className="headingWrapper">
            <h2 className="h2">{contact.headerText}</h2>
          </div>

          <div className="h3 textWrapper">
            <MyPortableText value={contact._rawSubText} className="h3"></MyPortableText>
            <p className="contactSection__cta">
              <Button to={contact.link} tag={Link} variant="primaryFilled">
                {contact.cta}
              </Button>
            </p>
          </div>
        </div>
      </section>
    </ContactSectionStyles>
  );

}

export default ContactSection;

import React from 'react';
import { Link } from 'gatsby';
import { FooterStyles } from '../styles/FooterStyles';
import Logo from './Logo';
import ParagraphText from './typography/ParagraphText';
import { menu } from '../constants/menu';
import { socialLinks } from '../constants/socialLinks';
import Button from './buttons/Button';

function Footer() {
  return (
    <FooterStyles>
      <section>
        <div className="footer__wrapper">
          <div className="footer__logo">
            <Link to="/">
              RACOMA <br /> / Strategies
            </Link>
          </div>
          <div>
            <ul className="h6">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  {`${item.name.toUpperCase()}: `}
                  <a href={item.url}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Button to={'/'} tag={Link} variant="primaryDark">
              Intermediary Brochure
            </Button>
          </div>
        </div>
      </section>

        {/* <ul className="footer__menuList">
          {menu.map((item) => (
            <li key={item.path}>
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul> */}
     
        {/* <ParagraphText className="copyright">
          © Racoma Strategies LLC {new Date().getFullYear()}. All rights
          reserved.
        </ParagraphText> */}
    
    </FooterStyles>
  );
}

export default Footer;

import React from 'react';
import { graphql, useStaticQuery, Link } from "gatsby";
import { FooterStyles } from '../styles/FooterStyles';
import Logo from './Logo';
import ParagraphText from './typography/ParagraphText';
import { menu } from '../constants/menu';
import { socialLinks } from '../constants/socialLinks';
import Button from './buttons/Button';
import MyPortableText from './MyPortableText';
  

// function Footer() {

//   const data = useStaticQuery(graphql`
//     {
//       allSanityHome {
//         nodes {
//           contact {
//             headerText
//             _rawSubText
//             link
//             cta
//             _key
//           }
//         }
//       }
//     }
//   `);
//   const contact = data.allSanityHome.nodes[0].contact;

//   return (
//     <FooterStyles>
//       <section>
//         <div className="contactSection__wrapper">
//           <div className="h3 textWrapper col">
//             <h4 className="h">{contact.headerText}</h4>

//           </div>
//           <div className="headingWrapper col h3">
//             <MyPortableText
//               value={contact._rawSubText}
//               className="h3"
//             ></MyPortableText>
            
//           </div>

//           <div className="col right">
//             <ul className="h3">
//               {socialLinks.map((item) => (
//                 <li key={item.name}>
//                   <a href={item.url}>{item.text}</a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         <div className="footer__wrapper">
//           <div className="footer__logo">
//             <Link to="/">
//               RACOMA <br /> / Strategies
//             </Link>
//           </div>
//           <Button to={"/"} tag={Link} variant="secondaryLight">
//             Intermediary Brochure
//           </Button>
//         </div>
//       </section>


//     </FooterStyles>
//   );
// }

// export default Footer;

function Footer() {
  return (
    <FooterStyles>
      <section>
        <div className="footer__wrapper">
          <div className="footer__logo col">
            <Link to="/">
              RACOMA <br /> / Strategies
            </Link>
          </div>
          <div className="footer__contactLinks col">
            <ul className="">
              {socialLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.url}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__button col">
            <Button to={"/"} tag={Link} variant="primaryFilled">
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

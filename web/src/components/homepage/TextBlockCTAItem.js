import React from "react";
import { Link } from "gatsby";
import { BlogItemStyles } from "../../styles/blog/BlogItemStyles";
import { GatsbyImage } from "gatsby-plugin-image";
import { Title } from "../typography/Title";
import ParagraphText from "../typography/ParagraphText";
import { format } from "date-fns";
import MyPortableText from "../MyPortableText";
import Button from "../buttons/Button";
function TextBlockCTAItem({ headerText, _rawSubText, cta, link, _key }) {
  return (
    <BlogItemStyles>
      <p>
        <strong>{headerText}</strong>
      </p>
      <MyPortableText value={_rawSubText}></MyPortableText>
      <p>
        <Button to={link} tag={Link} variant="secondaryLight">
          {cta}
        </Button>
      </p>
    </BlogItemStyles>
  );
}

export default TextBlockCTAItem;

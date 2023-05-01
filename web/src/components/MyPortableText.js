import React from 'react';
import { PortableText } from '@portabletext/react';
import ParagraphText from './typography/ParagraphText';
import { Title } from './typography/Title';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import sanityConfig from '../../sanity-config';
import { getImage, getImageDimensions } from '@sanity/asset-utils';
import theme from 'react-syntax-highlighter/dist/esm/styles/prism/vs-dark'
import { getSanityImageData } from '../utils/getSanityImageData';
import { GatsbyImage } from 'gatsby-plugin-image';

const myPortableTextComponents = {
  block: {
    normal: ({ children }) => <ParagraphText>{children}</ParagraphText>,
    h1: ({ children }) => <Title>{children}</Title>,
    li: ({ children }) => <li>{children}</li>,
    ol: ({ children }) => <ol className="custom-ordered-list">{children}</ol>,
  },
  types: {
    customCode: ({ value }) => (
      <SyntaxHighlighter
        style={theme}
        className="bodyCode"
        language={value.code.language}
      >
        {String(value.code.code).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ),
    customImage: ({ value }) => {
      const imageData = getImage(value.asset, sanityConfig).asset;
      const { width, height } = getImageDimensions(value);
      const image = {
        url: imageData.url,
        height: height,
        width: width,
      };

      const gatsbyImageData = getSanityImageData({
        image,
        layout: "constrained",
      });

      return (
        <GatsbyImage
          image={gatsbyImageData}
          alt={value.alt}
          className="bodyImage"
        ></GatsbyImage>
      );
    },
  },
};
function MyPortableText({value}) {
    return <PortableText value={value} components={myPortableTextComponents}/>

}

export default MyPortableText; 
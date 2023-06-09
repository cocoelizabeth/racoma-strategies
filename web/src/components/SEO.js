import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

function SEO({ title, description }) {
  const { site } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          description
          title
        }
      }
    }
  `);

  const seo = {
    title: title
      ? `${title} - ${site.siteMetadata.title}`
      : site.siteMetadata.title,
    description: description || site.siteMetadata.description,
  };
  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#648480" />
      <meta name="msapplication-TileColor" content="#648480" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
}

export default SEO;

require('dotenv').config('./.env');
const sanityConfig = require('./sanity-config');

module.exports = {
  siteMetadata: {
    title: `Racoma Strategies`,
    siteUrl: `https://techhub-blog.netlify.com`,
    description: `Racoma Strategies is a search fund focused on acquiring, operating, and growing a single high-potential small business.`,
  },
  plugins: [
    'gatsby-plugin-netlify',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...sanityConfig,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/,
          omitKeys: [
            'xmlnsDc',
            'xmlnsCc',
            'xmlnsRdf',
            'xmlnsSvg',
            'xmlnsSodipodi',
            'xmlnsInkscape',
          ],
        },
      },
    },
  ],
};

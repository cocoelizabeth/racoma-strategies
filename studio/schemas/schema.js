/* eslint-disable */
import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';
/* eslint-enable */

// import custom document
import blog from './documents/blog';
import author from './documents/author';
import category from './documents/category';
import featured from './documents/featured';

// import custom objects
import customImage from './objects/customImage';
import richText from './objects/richText';
// import customCode from './objects/customCode';
import normalText from './objects/normalText';
import customSEO from './objects/customSEO';
import heroText from './objects/home/hero';
import textBlockCTA from './objects/textBlockCTA';
import content from './objects/home/content';
import criteriaLists from './objects/whatWeLookFor/criteriaLists';
import textBlock from './objects/textBlock';

// import page documents
import home from './pageDocuments/home';
import whatWeLookFor from './pageDocuments/whatWeLookFor';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    // page documents,
    home,
    whatWeLookFor,
    // blog documents
    blog,
    author,
    category,
    featured,
    // objects
    customImage,
    richText,
    // customCode,
    normalText,
    customSEO,
    heroText,
    textBlockCTA,
    content,
    textBlock,
    criteriaLists,
  ]),
});

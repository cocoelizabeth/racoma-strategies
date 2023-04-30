import { MdPerson } from 'react-icons/md';

export default {
  title: 'Home',
  name: 'home',
  type: 'document',
  icon: MdPerson,
  fields: [
    {
      title: 'SEO',
      name: 'seo',
      type: 'customSEO',
    },
    {
      title: 'Hero Section',
      name: 'hero',
      type: 'heroText',
    },
    {
      title: 'Content Section',
      name: 'contentSection',
      type: 'content',
    },

    {
      type: 'textBlockCTA',
      name: 'contact',
      title: 'Contact Us',
    },
  ],
};

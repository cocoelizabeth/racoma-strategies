import { MdPerson } from 'react-icons/md';

export default {
  title: 'What We Look For',
  name: 'whatWeLookFor',
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
      type: 'criteriaLists',
    },
  ],
};

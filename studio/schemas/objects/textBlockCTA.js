export default {
  type: 'object',
  name: 'textBlockCTA',
  title: 'Text Block with CTA',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    {
      title: 'Header Text',
      name: 'headerText',
      type: 'string',
    },
    {
      title: 'Sub Text',
      name: 'subText',
      type: 'normalText',
    },
    {
      title: 'Call To Action',
      name: 'cta',
      type: 'string',
    },
    {
      title: 'Page to Link to',
      name: 'link',
      type: 'string',
    },
  ],
};

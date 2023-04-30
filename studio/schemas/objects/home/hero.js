export default {
  type: 'object',
  name: 'heroText',
  title: 'Hero Text',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fieldsets: [{ name: 'subHeadline', title: 'Sub Headline' }],
  fields: [
    {
      title: 'Headline Text',
      name: 'headlineText',
      type: 'string',
    },
    {
      title: 'Sub Headline Text',
      name: 'subHeadlineText',
      type: 'normalText',
      fieldset: 'subHeadline',
    },
    {
      title: 'Call To Action',
      name: 'cta',
      type: 'string',
      fieldset: 'subHeadline',
    },
    {
      title: 'Page to Link to',
      name: 'link',
      type: 'string',
      fieldset: 'subHeadline',
    },
  ],
};

export default {
  type: 'object',
  name: 'criteriaLists',
  title: 'Criteria Lists',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fieldsets: [{ name: 'criteriaLists', title: 'Criteria Lists' }],
  fields: [
    {
      title: 'List 1',
      name: 'list1',
      type: 'textBlock',
      fieldset: 'criteriaLists',
    },
    {
      title: 'List 2',
      name: 'list2',
      type: 'textBlock',
      fieldset: 'criteriaLists',
    },
    {
      title: 'List 3',
      name: 'list3',
      type: 'textBlock',
      fieldset: 'criteriaLists',
    },
    {
      title: 'List 4',
      name: 'list4',
      type: 'textBlock',
      fieldset: 'criteriaLists',
    },
  ],
};

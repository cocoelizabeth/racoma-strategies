import { MdImage } from 'react-icons/md';

export default {
  title: 'Image',
  name: 'customImage',
  type: 'image',
  icon: MdImage,
  options: {
    hotspot: true,
  },
  fields: [
    {
      title: 'Alt Text',
      name: 'alt',
      type: 'string',
      validation: (Rule) => Rule.error('Alt text cannot be empty').required(),
      options: {
        isHighlighted: true,
      },
    },
  ],
};

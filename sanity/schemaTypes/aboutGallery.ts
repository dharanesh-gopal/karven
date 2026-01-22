import { defineType } from 'sanity'

export default defineType({
  name: 'aboutGallery',
  type: 'document',
  title: 'About Page Gallery',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Gallery Title',
      description: 'Title for the gallery section',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Gallery Images',
      description: 'Images for the auto-rotating gallery',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
              description: 'Optional caption for the image',
            },
          ],
        },
      ],
    },
    {
      name: 'autoplayInterval',
      type: 'number',
      title: 'Autoplay Interval (ms)',
      description: 'Time between image transitions in milliseconds',
      initialValue: 3000,
    },
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Active',
      description: 'Enable/disable this gallery',
      initialValue: true,
    },
  ],
})

import { defineType } from 'sanity'

export default defineType({
  name: 'onFieldAction',
  title: 'On-Field Action Media',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Internal title for identification',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'mediaType',
      title: 'Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Upload an image (shown if Media Type is Image)',
      options: {
        hotspot: true,
      },
      hidden: ({ document }) => document?.mediaType !== 'image',
    },
    {
      name: 'video',
      title: 'Video',
      type: 'file',
      description: 'Upload a video (shown if Media Type is Video)',
      options: {
        accept: 'video/*',
      },
      hidden: ({ document }) => document?.mediaType !== 'video',
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Display order in the carousel (lower numbers appear first)',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      description: 'Toggle to show/hide this media',
      initialValue: true,
    },
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      mediaType: 'mediaType',
      order: 'order',
      isActive: 'isActive',
      image: 'image',
    },
    prepare({ title, mediaType, order, isActive, image }) {
      return {
        title: `${order}. ${title}`,
        subtitle: `${mediaType} ${isActive ? '✓' : '✗'}`,
        media: image,
      }
    },
  },
})

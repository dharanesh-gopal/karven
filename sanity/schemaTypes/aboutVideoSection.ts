import { defineType } from 'sanity'

export default defineType({
    name: 'aboutVideoSection',
    type: 'document',
    title: 'About - Video Section',
    fields: [
        {
            name: 'badge',
            type: 'string',
            title: 'Badge Text',
            initialValue: 'Bringing AI Technology Closer to You!',
        },
        {
            name: 'title',
            type: 'text',
            title: 'Main Title',
            rows: 3,
            validation: (Rule) => Rule.required(),
            initialValue: 'We aspire to make the Indian skies more accessible and future generations more skillful.',
        },
        {
            name: 'description',
            type: 'text',
            title: 'Description',
            rows: 4,
            initialValue: 'Driven by a mission to shape aerial excellence, we focus on providing comprehensive drone solutions and AI-powered software across diverse sectors. From industrial and enterprise applications to educational initiatives, KarVenSen aims to be a catalyst for positive change, fostering innovation and skill development in the evolving landscape of technology.',
        },
        {
            name: 'videoUrl',
            type: 'url',
            title: 'Video URL',
            description: 'YouTube, Vimeo, or direct video link',
            validation: (Rule) => Rule.required(),
            initialValue: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        },
        {
            name: 'thumbnailImage',
            type: 'image',
            title: 'Video Thumbnail',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                },
            ],
        },
        {
            name: 'isActive',
            type: 'boolean',
            title: 'Active',
            initialValue: true,
        },
    ],
})

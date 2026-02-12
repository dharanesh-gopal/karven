import { defineType } from 'sanity'

export default defineType({
    name: 'leadershipMember',
    type: 'document',
    title: 'Leadership Team Members',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Full Name',
            validation: (Rule) => Rule.required(),
            initialValue: 'Prateek Srivastava',
        },
        {
            name: 'position',
            type: 'string',
            title: 'Position/Title',
            description: 'e.g., Founder & Managing Director, CTO, etc.',
            validation: (Rule) => Rule.required(),
            initialValue: 'Founder & Managing Director',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Profile Image',
            description: 'Professional headshot photo',
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
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'linkedinUrl',
            type: 'url',
            title: 'LinkedIn Profile URL',
            description: 'Full LinkedIn profile URL',
        },
        {
            name: 'order',
            type: 'number',
            title: 'Display Order',
            description: 'Order in the team grid (1 = first)',
            validation: (Rule) => Rule.required(),
        },
        {
            name: 'isActive',
            type: 'boolean',
            title: 'Active',
            description: 'Show/hide this team member',
            initialValue: true,
        },
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'position',
            media: 'image',
        },
    },
})

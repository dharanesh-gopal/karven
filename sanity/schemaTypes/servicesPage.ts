import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Our Services',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
          rows: 2,
          initialValue: 'Diversified expertise across critical industries.',
        },
      ],
    }),

    // Drone Services Section
    defineField({
      name: 'droneSection',
      title: 'Drone Services Section',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Drone Technology Services',
        },
        {
          name: 'titleIcon',
          title: 'Title Icon',
          type: 'string',
          description: 'Icon for the service title section',
          initialValue: 'Drone',
        },
        {
          name: 'image',
          title: 'Section Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'imageAlt',
          title: 'Image Alt Text',
          type: 'string',
          initialValue: 'Drone operator at sunset',
        },
        {
          name: 'imageTitle',
          title: 'Image Overlay Title',
          type: 'string',
          initialValue: 'Premier Consultancy for Drone Projects',
        },
        {
          name: 'imageLink',
          title: 'Image Link',
          type: 'string',
          initialValue: '/contact?enquiry=drone-services',
        },
        {
          name: 'learnMoreText',
          title: 'Learn More Text',
          type: 'string',
          initialValue: 'Learn More',
        },
        {
          name: 'badge1Label',
          title: 'Badge 1 Label',
          type: 'string',
          initialValue: 'Premium',
        },
        {
          name: 'badge1Icon',
          title: 'Badge 1 Icon',
          type: 'string',
          options: {
            list: [
              { title: 'Drone', value: 'Drone' },
              { title: 'Camera', value: 'Camera' },
              { title: 'Video', value: 'Video' },
              { title: 'Cpu', value: 'Cpu' },
              { title: 'Cloud', value: 'Cloud' },
              { title: 'GraduationCap', value: 'GraduationCap' },
            ],
          },
          initialValue: 'Drone',
        },
        {
          name: 'badge1Text',
          title: 'Badge 1 Text',
          type: 'string',
          initialValue: 'Drone Tech',
        },
        {
          name: 'badge2Label',
          title: 'Badge 2 Label',
          type: 'string',
          initialValue: 'Certified',
        },
        {
          name: 'badge2Text',
          title: 'Badge 2 Text',
          type: 'string',
          initialValue: 'Excellence',
        },
        {
          name: 'badge2Icon',
          title: 'Badge 2 Icon',
          type: 'string',
          options: {
            list: [
              { title: 'CheckCircle2', value: 'CheckCircle2' },
              { title: 'Shield', value: 'Shield' },
              { title: 'Target', value: 'Target' },
              { title: 'Zap', value: 'Zap' },
            ],
          },
          initialValue: 'CheckCircle2',
        },
      ],
    }),

    // AI & Software Services Section
    defineField({
      name: 'softwareSection',
      title: 'AI & Software Services Section',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          initialValue: 'AI & Software Services',
        },
        {
          name: 'titleIcon',
          title: 'Title Icon',
          type: 'string',
          description: 'Icon for the service title section',
          initialValue: 'Cpu',
        },
        {
          name: 'image',
          title: 'Section Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'imageAlt',
          title: 'Image Alt Text',
          type: 'string',
          initialValue: 'AI and Software Development',
        },
        {
          name: 'imageTitle',
          title: 'Image Overlay Title',
          type: 'string',
          initialValue: 'Cutting-Edge AI & Software Solutions',
        },
        {
          name: 'imageLink',
          title: 'Image Link',
          type: 'string',
          initialValue: '/contact',
        },
        {
          name: 'learnMoreText',
          title: 'Learn More Text',
          type: 'string',
          initialValue: 'Learn More',
        },
        {
          name: 'badge1Label',
          title: 'Badge 1 Label',
          type: 'string',
          initialValue: 'Advanced',
        },
        {
          name: 'badge1Text',
          title: 'Badge 1 Text',
          type: 'string',
          initialValue: 'AI Solutions',
        },
        {
          name: 'badge1Icon',
          title: 'Badge 1 Icon',
          type: 'string',
          options: {
            list: [
              { title: 'Cpu', value: 'Cpu' },
              { title: 'Camera', value: 'Camera' },
              { title: 'Video', value: 'Video' },
              { title: 'Drone', value: 'Drone' },
              { title: 'Cloud', value: 'Cloud' },
              { title: 'GraduationCap', value: 'GraduationCap' },
            ],
          },
          initialValue: 'Cpu',
        },
        {
          name: 'badge2Label',
          title: 'Badge 2 Label',
          type: 'string',
          initialValue: 'Proven',
        },
        {
          name: 'badge2Text',
          title: 'Badge 2 Text',
          type: 'string',
          initialValue: 'Results',
        },
        {
          name: 'badge2Icon',
          title: 'Badge 2 Icon',
          type: 'string',
          options: {
            list: [
              { title: 'CheckCircle2', value: 'CheckCircle2' },
              { title: 'Shield', value: 'Shield' },
              { title: 'Target', value: 'Target' },
              { title: 'Zap', value: 'Zap' },
            ],
          },
          initialValue: 'CheckCircle2',
        },
      ],
    }),

    // Educational Programs Section
    defineField({
      name: 'educationSection',
      title: 'Educational Programs Section',
      type: 'object',
      fields: [
        {
          name: 'sectionTitle',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Educational Programs',
        },
        {
          name: 'titleIcon',
          title: 'Title Icon',
          type: 'string',
          description: 'Icon for the service title section',
          initialValue: 'GraduationCap',
        },
        {
          name: 'image',
          title: 'Section Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
        {
          name: 'imageAlt',
          title: 'Image Alt Text',
          type: 'string',
          initialValue: 'Educational Programs and Training',
        },
        {
          name: 'imageTitle',
          title: 'Image Overlay Title',
          type: 'string',
          initialValue: 'Empowering Through Education & Training',
        },
        {
          name: 'imageLink',
          title: 'Image Link',
          type: 'string',
          initialValue: '/contact',
        },
        {
          name: 'learnMoreText',
          title: 'Learn More Text',
          type: 'string',
          initialValue: 'Learn More',
        },
        {
          name: 'badge1Label',
          title: 'Badge 1 Label',
          type: 'string',
          initialValue: 'Expert',
        },
        {
          name: 'badge1Text',
          title: 'Badge 1 Text',
          type: 'string',
          initialValue: 'Training',
        },
        {
          name: 'badge1Icon',
          title: 'Badge 1 Icon',
          type: 'string',
          options: {
            list: [
              { title: 'GraduationCap', value: 'GraduationCap' },
              { title: 'Camera', value: 'Camera' },
              { title: 'Video', value: 'Video' },
              { title: 'Drone', value: 'Drone' },
              { title: 'Cpu', value: 'Cpu' },
              { title: 'Cloud', value: 'Cloud' },
            ],
          },
          initialValue: 'GraduationCap',
        },
        {
          name: 'badge2Label',
          title: 'Badge 2 Label',
          type: 'string',
          initialValue: 'Certified',
        },
        {
          name: 'badge2Text',
          title: 'Badge 2 Text',
          type: 'string',
          initialValue: 'Programs',
        },
        {
          name: 'badge2Icon',
          title: 'Badge 2 Icon',
          type: 'string',
          options: {
            list: [
              { title: 'CheckCircle2', value: 'CheckCircle2' },
              { title: 'Shield', value: 'Shield' },
              { title: 'Target', value: 'Target' },
              { title: 'Zap', value: 'Zap' },
            ],
          },
          initialValue: 'CheckCircle2',
        },
      ],
    }),

    // CTA Section
    defineField({
      name: 'ctaSection',
      title: 'CTA Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Ready to Transform Your Business?',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          initialValue: "Let's discuss how our drone technology and AI solutions can help you achieve your goals and stay ahead of the competition.",
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Schedule a Consultation',
        },
        {
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
          initialValue: '/contact?enquiry=services',
        },
        {
          name: 'trustIndicators',
          title: 'Trust Indicators',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'text',
                  title: 'Text',
                  type: 'string',
                },
              ],
            },
          ],
          initialValue: [
            { text: '1500+ Pilots Trained' },
            { text: '40+ UAV Surveys' },
            { text: 'Industry Leading' },
          ],
        },
        {
          name: 'ctaIcon',
          title: 'CTA Icon',
          type: 'string',
          options: {
            list: [
              { title: 'Drone', value: 'Drone' },
              { title: 'Cpu', value: 'Cpu' },
              { title: 'GraduationCap', value: 'GraduationCap' },
              { title: 'Camera', value: 'Camera' },
              { title: 'Cloud', value: 'Cloud' },
              { title: 'CheckCircle2', value: 'CheckCircle2' },
            ],
          },
          initialValue: 'Drone',
        },
      ],
    }),

    // SEO
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Meta Title',
          type: 'string',
        },
        {
          name: 'metaDescription',
          title: 'Meta Description',
          type: 'text',
          rows: 3,
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'hero.title',
    },
    prepare({ title }) {
      return {
        title: title || 'Services Page',
        subtitle: 'Main Services Page Content',
      }
    },
  },
})

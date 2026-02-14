import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'careersPageSettings',
  title: 'Careers Page - All Sections',
  type: 'document',
  groups: [
    {name: 'hero', title: '1. Hero Section'},
    {name: 'values', title: '2. Where Technology Meets'},
    {name: 'opportunities', title: '3. Career Opportunities'},
    {name: 'jobs', title: '4. Job Openings'},
    {name: 'companyValues', title: '5. Company Values'},
    {name: 'benefits', title: '6. Employee Benefits'},
    {name: 'culture', title: '7. Culture Gallery'},
    {name: 'hiring', title: '8. Hiring Process'},
    {name: 'testimonials', title: '9. Employee Testimonials'},
    {name: 'cta', title: '10. Talent Network CTA'},
    {name: 'seo', title: 'SEO & Settings'},
  ],
  fields: [
    // ============================================
    // 1. HERO SECTION
    // ============================================
    defineField({
      name: 'heroSection',
      title: 'Hero Section - Top Banner',
      type: 'object',
      group: 'hero',
      options: {collapsible: true, collapsed: false},
      fields: [
        {
          name: 'badge',
          title: 'Badge Text',
          type: 'string',
          initialValue: 'Join The Revolution',
        },
        {
          name: 'title',
          title: 'Main Title',
          type: 'string',
          initialValue: 'Life at KarVenSen',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'companyNameHighlight',
          title: 'Company Name (for gradient)',
          type: 'string',
          initialValue: 'KarVenSen',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'text',
          rows: 2,
          initialValue: 'We are building the autonomous infrastructure of tomorrow.',
        },
        {
          name: 'ctaText',
          title: 'CTA Button Text',
          type: 'string',
          initialValue: 'View Openings',
        },
        {
          name: 'ctaLink',
          title: 'CTA Button Link',
          type: 'string',
          initialValue: '#openings',
        },
        {
          name: 'backgroundImage',
          title: 'Background Image',
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),

    // ============================================
    // 2. WHERE TECHNOLOGY MEETS SECTION (VALUES INTRO)
    // ============================================
    defineField({
      name: 'valuesSection',
      title: 'Where Technology Meets Section',
      type: 'object',
      group: 'values',
      options: {collapsible: true, collapsed: false},
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Where Technology Meets',
        },
        {
          name: 'titleHighlight',
          title: 'Title Highlight (colored)',
          type: 'string',
          initialValue: 'Real-World Impact',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          initialValue:
            'At KarVenSen, we build the digital infrastructure for the aviation industry. Join a team dedicated to precision, safety, and scalable engineering.',
        },
        {
          name: 'decorativeImage1',
          title: 'Decorative Image 1 (Large)',
          type: 'image',
          options: {hotspot: true},
        },
        {
          name: 'decorativeImage2',
          title: 'Decorative Image 2 (Small)',
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),

    // ============================================
    // 3. CAREER OPPORTUNITIES SECTION
    // ============================================
    defineField({
      name: 'careerOpportunitiesSection',
      title: 'Career Opportunities Section',
      type: 'object',
      group: 'opportunities',
      options: {collapsible: true, collapsed: false},
      fields: [
        {
          name: 'opportunities',
          title: 'Career Opportunities',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'iconName',
                  title: 'Icon Name',
                  type: 'string',
                  description: 'Lucide icon name (e.g., Users, Award, GraduationCap)',
                },
                {
                  name: 'iconColor',
                  title: 'Icon Color',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Blue', value: 'blue'},
                      {title: 'Green', value: 'green'},
                      {title: 'Red', value: 'red'},
                      {title: 'Purple', value: 'purple'},
                    ],
                  },
                  initialValue: 'blue',
                },
                {
                  name: 'isActive',
                  title: 'Active',
                  type: 'boolean',
                  initialValue: true,
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'description',
                },
              },
            },
          ],
        },
      ],
    }),

    // ============================================
    // 4. JOB OPENINGS SECTION
    // ============================================
    defineField({
      name: 'jobOpeningsSection',
      title: 'Job Openings Section',
      type: 'object',
      group: 'jobs',
      options: {collapsible: true, collapsed: false},
      fields: [
        {
          name: 'badge',
          title: 'Badge Text',
          type: 'string',
          initialValue: 'Join the Fleet',
        },
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Current Openings',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
          initialValue:
            "We are expanding across Engineering, Operations, and Product. Find the role where you can do your life's best work.",
        },
        {
          name: 'jobOpenings',
          title: 'Job Openings',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'id',
                  title: 'Job ID',
                  type: 'slug',
                  description: 'Unique identifier for URL (e.g., eng-1, ops-2)',
                  options: {
                    source: 'title',
                    maxLength: 50,
                  },
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'title',
                  title: 'Job Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'department',
                  title: 'Department',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Engineering', value: 'Engineering'},
                      {title: 'Flight Operations', value: 'Flight Operations'},
                      {title: 'Product', value: 'Product'},
                      {title: 'Business', value: 'Business'},
                    ],
                  },
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'location',
                  title: 'Location',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'type',
                  title: 'Employment Type',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Full-time', value: 'Full-time'},
                      {title: 'Part-time', value: 'Part-time'},
                      {title: 'Contract', value: 'Contract'},
                      {title: 'On-site', value: 'On-site'},
                      {title: 'Remote', value: 'Remote'},
                      {title: 'Hybrid', value: 'Hybrid'},
                    ],
                  },
                },
                {
                  name: 'experience',
                  title: 'Experience Required',
                  type: 'string',
                  description: 'e.g., 5+ Years, 3-5 Years',
                },
                {
                  name: 'postedAt',
                  title: 'Posted Date',
                  type: 'string',
                  description: 'e.g., 2 days ago, Just now',
                },
                {
                  name: 'description',
                  title: 'Job Description',
                  type: 'text',
                  rows: 5,
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'responsibilities',
                  title: 'Key Responsibilities',
                  type: 'array',
                  of: [{type: 'string'}],
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'requirements',
                  title: 'Requirements',
                  type: 'array',
                  of: [{type: 'string'}],
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'isActive',
                  title: 'Active',
                  type: 'boolean',
                  initialValue: true,
                  description: 'Set to false to hide job from listing',
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'department',
                  department: 'department',
                  location: 'location',
                  isActive: 'isActive',
                },
                prepare({title, department, location, isActive}) {
                  return {
                    title,
                    subtitle: `${department} • ${location} ${!isActive ? '(Inactive)' : ''}`,
                  }
                },
              },
            },
          ],
        },
      ],
    }),

    // ============================================
    // 5. COMPANY VALUES SECTION
    // ============================================
    defineField({
      name: 'companyValuesSection',
      title: 'Company Values Section',
      type: 'object',
      group: 'companyValues',
      options: {collapsible: true, collapsed: false},
      fields: [
        {
          name: 'values',
          title: 'Company Values',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 3,
                },
                {
                  name: 'icon',
                  title: 'Icon Name',
                  type: 'string',
                  description: 'Lucide icon name (e.g., Globe, TrendingUp, ShieldCheck)',
                },
                {
                  name: 'isActive',
                  title: 'Active',
                  type: 'boolean',
                  initialValue: true,
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'description',
                },
              },
            },
          ],
        },
      ],
    }),

    // ============================================
    // 6. EMPLOYEE BENEFITS SECTION
    // ============================================
    defineField({
      name: 'benefitsSection',
      title: 'Employee Benefits Section',
      type: 'object',
      group: 'benefits',
      options: {collapsible: true, collapsed: false},
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Invest in your',
        },
        {
          name: 'titleHighlight',
          title: 'Title Highlight (colored)',
          type: 'string',
          initialValue: 'Future Self.',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
          initialValue:
            "We don't just offer perks; we offer an ecosystem for you to master Cloud, AI, and Aviation tech.",
        },
        {
          name: 'policyLinkText',
          title: 'Policy Link Text',
          type: 'string',
          initialValue: 'View Full Policy Guide',
        },
        {
          name: 'benefits',
          title: 'Employee Benefits',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 3,
                },
                {
                  name: 'category',
                  title: 'Category',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Engineering Ecosystem', value: 'Engineering Ecosystem'},
                      {title: 'Compensation & IP', value: 'Compensation & IP'},
                      {title: 'Global Lifestyle', value: 'Global Lifestyle'},
                    ],
                  },
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'icon',
                  title: 'Icon Name',
                  type: 'string',
                  description: 'Lucide icon name (e.g., Globe, Sparkles, Monitor, Cpu)',
                },
                {
                  name: 'isActive',
                  title: 'Active',
                  type: 'boolean',
                  initialValue: true,
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'category',
                },
              },
            },
          ],
        },
        {
          name: 'policyModal',
          title: 'Policy Modal Content',
          type: 'object',
          fields: [
            {
              name: 'modalTitle',
              title: 'Modal Title',
              type: 'string',
              initialValue: 'Employee Policy Guide',
            },
            {
              name: 'edition',
              title: 'Edition Text',
              type: 'string',
              initialValue: '2026 Edition • Global',
            },
            {
              name: 'sections',
              title: 'Policy Sections',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'icon',
                      title: 'Icon Name',
                      type: 'string',
                      description: 'Lucide icon name (e.g., Clock, Wallet, Laptop, Baby)',
                    },
                    {
                      name: 'title',
                      title: 'Section Title',
                      type: 'string',
                    },
                    {
                      name: 'content',
                      title: 'Content',
                      type: 'array',
                      of: [
                        {
                          type: 'object',
                          fields: [
                            {name: 'label', title: 'Label', type: 'string'},
                            {name: 'value', title: 'Value', type: 'text', rows: 2},
                          ],
                        },
                      ],
                    },
                  ],
                  preview: {
                    select: {title: 'title'},
                  },
                },
              ],
            },
            {
              name: 'closeButtonText',
              title: 'Close Button Text',
              type: 'string',
              initialValue: 'Close Guide',
            },
          ],
        },
      ],
    }),

    // ============================================
    // 7. CULTURE GALLERY SECTION
    // ============================================
    defineField({
      name: 'cultureSection',
      title: 'Culture Gallery Section',
      type: 'object',
      group: 'culture',
      options: {collapsible: true, collapsed: false},
      fields: [
        {
          name: 'cultureImages',
          title: 'Culture Gallery Images',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'category',
                  title: 'Category',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Teamwork', value: 'Teamwork'},
                      {title: 'Innovation', value: 'Innovation'},
                      {title: 'Learning', value: 'Learning'},
                      {title: 'Office', value: 'Office'},
                    ],
                  },
                },
                {
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {hotspot: true},
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'isActive',
                  title: 'Active',
                  type: 'boolean',
                  initialValue: true,
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'category',
                  media: 'image',
                },
              },
            },
          ],
        },
      ],
    }),

    // ============================================
    // 8. HIRING PROCESS SECTION
    // ============================================
    defineField({
      name: 'hiringProcessSection',
      title: 'Hiring Process Section',
      type: 'object',
      group: 'hiring',
      options: {collapsible: true, collapsed: false},
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Our Hiring Process',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          initialValue: 'A transparent path from application to offer.',
        },
        {
          name: 'hiringSteps',
          title: 'Hiring Process Steps',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                  rows: 2,
                },
                {
                  name: 'icon',
                  title: 'Icon Name',
                  type: 'string',
                  description: 'Lucide icon name (e.g., FileText, UserCheck, Terminal, CheckCircle)',
                },
                {
                  name: 'isActive',
                  title: 'Active',
                  type: 'boolean',
                  initialValue: true,
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'description',
                },
              },
            },
          ],
        },
      ],
    }),

    // ============================================
    // 9. EMPLOYEE TESTIMONIALS SECTION
    // ============================================
    defineField({
      name: 'testimonialsSection',
      title: 'Employee Testimonials Section',
      type: 'object',
      group: 'testimonials',
      options: {collapsible: true, collapsed: false},
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Voices from the Team',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          initialValue: 'Hear from the people building the future.',
        },
        {
          name: 'testimonials',
          title: 'Employee Testimonials',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'role',
                  title: 'Role/Position',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'quote',
                  title: 'Quote',
                  type: 'text',
                  rows: 4,
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'image',
                  title: 'Profile Image',
                  type: 'image',
                  options: {hotspot: true},
                },
                {
                  name: 'isActive',
                  title: 'Active',
                  type: 'boolean',
                  initialValue: true,
                },
              ],
              preview: {
                select: {
                  title: 'name',
                  subtitle: 'role',
                  media: 'image',
                },
              },
            },
          ],
        },
      ],
    }),

    // ============================================
    // 10. TALENT NETWORK CTA SECTION
    // ============================================
    defineField({
      name: 'talentNetworkCTA',
      title: 'Talent Network CTA Section',
      type: 'object',
      group: 'cta',
      options: {collapsible: true, collapsed: false},
      fields: [
        {
          name: 'title',
          title: 'CTA Title',
          type: 'string',
          initialValue: "Don't see your perfect role?",
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
          initialValue:
            "We are always looking for exceptional talent. Send us your resume and we'll keep you on our radar for future missions.",
        },
        {
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Join Talent Network',
        },
      ],
    }),

    // ============================================
    // SEO & SETTINGS
    // ============================================
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seoObject',
      group: 'seo',
    }),
    defineField({
      name: 'showApplicationForm',
      title: 'Show Application Form',
      type: 'boolean',
      initialValue: true,
      group: 'seo',
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true,
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Careers Page - All Sections',
        subtitle: 'Configure all career page content',
      }
    },
  },
})

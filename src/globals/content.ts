import type { GlobalConfig } from 'payload'

export const Content: GlobalConfig = {
  slug: 'content',
  access: {
    read: () => true,
  },
  admin: {
    livePreview: {
      url: 'http://localhost:3000',
    },
  },
  versions: {
    drafts: {
      autosave: {
        interval: 375,
      },
    },
  },
  fields: [
    {
      name: 'heroSectionHeader',
      type: 'text',
    },

    {
      name: 'heroSectionText',
      type: 'text',
    },
    {
      name: 'bulkVideos',
      type: 'relationship',
      relationTo: 'media',
      hasMany: true,
    },

    {
      name: 'whatWeDo',
      type: 'text',
    },
    {
      name: 'fullScreenVideo',
      type: 'relationship',
      relationTo: 'media',
      hasMany: false,
    },
    {
      name: 'workGridHeading',
      type: 'text',
    },
    {
      name: 'workGridCards',
      type: 'relationship',
      relationTo: 'work-grid-card',
      hasMany: true,
    },
    {
      name: 'secondVideoText',
      type: 'text',
    },
    {
      name: 'secondFullScreenVideo',
      type: 'relationship',
      relationTo: 'media',
      hasMany: false,
    },
    {
      name: 'clientCardHeading',
      type: 'text',
    },
    {
      name: 'clientCards',
      type: 'relationship',
      relationTo: 'client-card',
      hasMany: true,
    },
    {
      name: 'testimonialText',
      type: 'text',
    },
    {
      name: 'testimonials',
      type: 'relationship',
      relationTo: 'testemonial',
      hasMany: true,
    },
    {
      name: 'trustBuilderHeading',
      type: 'text',
    },
    {
      name: 'trustBuilderText',
      type: 'text',
    },
    {
      name: 'finalWordsText',
      type: 'text',
    },
    {
      name: 'secondFinalWordsText',
      type: 'text',
    },
    {
      name: 'thirdFinalWordsText',
      type: 'text',
    },
    {
      name: 'footerText',
      type: 'text',
    },
    {
      name: 'rightsText',
      type: 'text',
    },
  ],
}

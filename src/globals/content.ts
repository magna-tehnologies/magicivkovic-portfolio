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
      required: true,
    },
    {
      name: 'testimonials',
      type: 'relationship',
      relationTo: 'testemonial',
      hasMany: true,
      required: true,
    },
  ],
}

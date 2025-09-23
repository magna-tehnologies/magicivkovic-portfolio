import type { CollectionConfig } from 'payload'

export const Testemonial: CollectionConfig = {
  slug: 'testemonial',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'client',
      type: 'text',
      required: true,
    },
    {
      name: 'clientRole',
      type: 'text',
      required: true,
    },
    {
      name: 'testemonial',
      type: 'text',
      required: true,
    },
    {
      name: 'picture',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
}

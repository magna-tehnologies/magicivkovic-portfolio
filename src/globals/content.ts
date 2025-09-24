import type { GlobalConfig } from "payload";

export const Content: GlobalConfig = {
  slug: "content",
  access: {
    read: () => true,
  },
  admin: {
    livePreview: {
      url: "http://localhost:3000",
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
      name: "heroSectionHeader",
      type: "text",
      required: true,
    },

    {
      name: "heroSectionText",
      type: "text",
      required: true,
    },
    {
      name: "bulkVideos",
      type: "relationship",
      relationTo: "media",
      hasMany: true,
      required: true,
    },

    {
      name: "whatWeDo",
      type: "text",
      required: true,
    },
    {
      name: "fullScreenVideo",
      type: "relationship",
      relationTo: "media",
      hasMany: false,
      required: true,
    },
    {
      name: "workGridHeading",
      type: "text",
      required: true,
    },
    {
      name: "workGridCards",
      type: "relationship",
      relationTo: "work-grid-card",
      hasMany: true,
      required: true,
    },
    {
      name: "secondVideoText",
      type: "text",
      required: true,
    },
    {
      name: "secondFullScreenVideo",
      type: "relationship",
      relationTo: "media",
      hasMany: false,
      required: true,
    },
    {
      name: "clientCardHeading",
      type: "text",
      required: true,
    },
    {
      name: "clientCards",
      type: "relationship",
      relationTo: "client-card",
      hasMany: true,
      required: true,
    },
    {
      name: "testimonialText",
      type: "text",
      required: true,
    },
    {
      name: "testimonials",
      type: "relationship",
      relationTo: "testemonial",
      hasMany: true,
      required: true,
    },
    {
      name: "trustBuilderHeading",
      type: "text",
      required: true,
    },
    {
      name: "trustBuilderText",
      type: "text",
      required: true,
    },
    {
      name: "finalWordsText",
      type: "text",
      required: true,
    },
    {
      name: "secondFinalWordsText",
      type: "text",
      required: true,
    },
    {
      name: "thirdFinalWordsText",
      type: "text",
      required: true,
    },
    {
      name: "footerText",
      type: "text",
      required: true,
    },
    {
      name: "rightsText",
      type: "text",
      required: true,
    },
  ],
};

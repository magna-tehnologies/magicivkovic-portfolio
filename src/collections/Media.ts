import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
    {
      name: "section",
      type: "select",
      required: false,
      options: [
        { label: "Bulk Videos", value: "bulk" },
        { label: "First Full Screen Video", value: "full-screen-1" },
        { label: "Second Full Screen Video", value: "full-screen-2" },
      ],
    },
  ],
  upload: true,
};

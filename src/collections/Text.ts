import { CollectionConfig } from "payload";

export const Text: CollectionConfig = {
  slug: "text",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "text",
      type: "text",
      required: true,
    },
  ],
  upload: true,
};

import type { CollectionConfig } from "payload";

export const WorkGridCard: CollectionConfig = {
  slug: "work-grid-card",
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
};

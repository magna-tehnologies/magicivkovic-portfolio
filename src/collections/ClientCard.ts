import type { CollectionConfig } from "payload";

export const ClientCard: CollectionConfig = {
  slug: "client-card",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "Client",
      type: "text",
      required: true,
    },
    {
      name: "Place",
      type: "text",
      required: true,
    },
  ],
};

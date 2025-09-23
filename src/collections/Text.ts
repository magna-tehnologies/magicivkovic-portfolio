import { CollectionConfig } from "payload";

export const Text: CollectionConfig = {
  slug: "texts",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "text",
      type: "text",
      required: true,
    },
    {
      name: "section",
      type: "select",
      unique: true,
      options: [
        { label: "Brand-Name", value: "brand-name" },
        { label: "HeroSection-Header", value: "hero-section-hook" },
        { label: "HeroSection-footer-1", value: "hero-section-footer-1" },
        { label: "HeroSection-footer-2", value: "hero-section-footer-2" },
        { label: "HeroSection-footer-3", value: "hero-section-footer-3" },

        { label: "What-We-Do-Section-Text", value: "what-we-do-section" },
        {
          label: "Work-Grid-Section-Header",
          value: "work-grid-section-header",
        },
        { label: "Scaling-Video-1-Header", value: "scaling-video-1-header" },
        { label: "Clients-Section-Header", value: "clients-section-header" },
        { label: "Testemonial-Header", value: "testemonial-header" },
        { label: "Trust-Builder-Header", value: "trust-builder-header" },
        { label: "Trust-Builder-Text", value: "trust-builder-text" },
        { label: "Final-Words-Text-1", value: "final-words-text-1" },
        { label: "Final-Words-Text-2", value: "final-words-text-2" },
        { label: "Final-Words-Text-3", value: "final-words-text-3" },
        { label: "Footer-Text", value: "footer-text" },
        { label: "Footer-Rights", value: "footer-rights" },
      ],
    },
  ],
};

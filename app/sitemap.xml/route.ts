import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://can-agro.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },

     { url: "https://can-agro.com/contacts", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
     { url: "https://can-agro.com/products", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];
}

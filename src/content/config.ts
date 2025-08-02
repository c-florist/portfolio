import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      heroImage: image(),
      liveUrl: z.string().url().optional(),
      repoUrl: z.string().url().optional(),
      technologies: z.array(z.string()),
    }),
});

export const collections = {
  projects: projectsCollection,
};

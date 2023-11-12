import { z, defineCollection } from "astro:content";

const postSchema = z.object({
  title: z.string(),
  tags: z.array(z.string()),
  pubDate: z.date(),
});

const techCollection = defineCollection({
  type: "content",
  schema: postSchema,
});
const hobbyCollection = defineCollection({
  type: "content",
  schema: postSchema,
});

export const collections = {
  tech: techCollection,
  hobby: hobbyCollection,
};

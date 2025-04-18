import { z } from "zod";

const ArticleSchema = z.object({
  content: z.string(),
  tag: z.string(),
  nickname: z.string().default("anónimo"),
  createAt: z.date().default(new Date()),
  updateAt: z.date().default(new Date()),
});

export default ArticleSchema;

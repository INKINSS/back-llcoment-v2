import { z } from 'zod'

const ArticleSchema = z.object({
    title: z.string(),
    content: z.string(),
    tags: z.array(z.string()),
    author: z.string().default('anónimo'),
    createAt: z.date().default(new Date()),
    updateAt: z.date().default(new Date())
})

export default ArticleSchema
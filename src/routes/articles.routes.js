import { Router } from 'express'
const router = Router()
import { getAllArticles } from "../controllers/articles.controllers.js"

router.get('/articles', getAllArticles)

export default router




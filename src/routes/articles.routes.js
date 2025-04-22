import { Router } from "express";
const router = Router();
import {
  getAllArticles,
  getArticleBySlug,
  createArticle,
  updateArticle,
  deleteArticle,
} from "../controllers/articles.controllers.js";

router.get("/api/articles", getAllArticles);
router.get("/api/article/:slug", getArticleBySlug);
router.post("/api/article", createArticle);
router.put("/api/article/:id", updateArticle);
router.delete("/api/article/:id", deleteArticle);
export default router;

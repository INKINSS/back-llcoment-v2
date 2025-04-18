import { Router } from "express";
const router = Router();
import {
  getAllArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
} from "../controllers/articles.controllers.js";

router.get("/api/articles", getAllArticles);
router.get("/api/article/:id", getArticleById);
router.post("/api/article", createArticle);
router.put("/api/article/:id", updateArticle);
router.delete("/api/article/:id", deleteArticle);

export default router;

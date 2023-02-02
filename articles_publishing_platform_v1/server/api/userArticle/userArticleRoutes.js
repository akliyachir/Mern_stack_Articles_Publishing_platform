import { Router } from 'express';
import { getUserArticles } from './getUserArticlesController.js';
import { createUserArticle } from './createUserArticleController.js';

const router = Router();

router.get('/', getUserArticles);
router.post('/', createUserArticle);

export default router;

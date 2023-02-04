import { Router } from 'express';
import { getUserArticles } from './getUserArticlesController.js';
import { createUserArticle } from './createUserArticleController.js';
import getOneUserArticle from './getOneUserArticleController.js';

const router = Router();

router.get('/', getUserArticles);
router.get('/:user_article_id', getOneUserArticle);
router.post('/', createUserArticle);

export default router;

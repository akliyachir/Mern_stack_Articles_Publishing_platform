import { Router } from 'express';
import { getUserArticles } from './getUserArticlesController.js';
import { createUserArticle } from './createUserArticleController.js';
import getOneUserArticle from './getOneUserArticleController.js';
import deleteUserArticle from './deleteUserArticleController.js';

const router = Router();

router.get('/', getUserArticles);
router.get('/:user_article_id', getOneUserArticle);
router.delete('/:user_article_id', deleteUserArticle);
router.post('/', createUserArticle);

export default router;

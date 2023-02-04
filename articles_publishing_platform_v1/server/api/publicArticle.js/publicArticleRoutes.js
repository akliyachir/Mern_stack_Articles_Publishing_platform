import { Router } from 'express';
import showAllPublicArticles from './showAllPublicArticlesController.js';
import showOnlyOnePublicArticles from './showOnlyOnePublicArticlesController.js';

const router = Router();

router.get('/', showAllPublicArticles);
router.get('/:public_article_id', showOnlyOnePublicArticles);

export default router;

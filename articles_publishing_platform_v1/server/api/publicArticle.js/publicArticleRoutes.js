import { Router } from 'express';
import showAllPublicArticles from './showAllPublicArticlesController.js';

const router = Router();

router.get('/', showAllPublicArticles);
router.get('/', showOnlyOnePublicArticles);

export default router;

import { Router } from 'express';
import showAllPublicArticles from './showAllPublicArticlesController.js';

const router = Router();

router.get('/', showAllPublicArticles);

export default router;

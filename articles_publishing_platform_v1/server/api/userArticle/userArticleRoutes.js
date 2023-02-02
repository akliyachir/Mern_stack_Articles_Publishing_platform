import { Router } from 'express';
import { getUserArticles } from './getUserArticles.js';

const router = Router();

router.get('/', getUserArticles);

export default router;

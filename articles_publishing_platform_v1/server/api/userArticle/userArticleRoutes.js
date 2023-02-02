import { Router } from 'express';
import { getUserArticles } from './getUserArticles.js';

const router = Router();

router.post('/', getUserArticles);

export default router;

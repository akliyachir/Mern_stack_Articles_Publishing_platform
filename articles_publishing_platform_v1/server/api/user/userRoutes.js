import { Router } from 'express';
import signIn from './signInController.js';
import signUp from './signUpController.js';

const router = Router();
//-- routes
router.post('/signup', signUp);
router.post('/signin', signIn);

export default router;

import {Router} from 'express';
import { signIn, signUp, updateUser } from '../controllers/user.controller';

const router = Router();

router.post('/signup',signUp);
router.put('/user/:id',updateUser);
router.post('/signin', signIn);

export default router;
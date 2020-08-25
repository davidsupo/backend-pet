import {Router} from 'express';

import { registerPet , updatePet, getPet } from '../controllers/pet.controller';

const router = Router();

router.post('/pets',registerPet);
router.put('/pets/:id',updatePet);
router.get('/pets/:id',getPet);

export default router;
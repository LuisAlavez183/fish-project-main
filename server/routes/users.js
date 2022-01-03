import { Router } from 'express';
//importo controlador Home
import userController from '@server/controllers/userController';

const router = new Router();
/* GET users listing. */
router.get('/', userController.index);

export default router;

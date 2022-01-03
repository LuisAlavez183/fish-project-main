import { Router } from 'express';
//importo controlador Home
import homeControllers from '@server/controllers/homeControllers';

//Creando  la  instancia de un router
const router = new Router();

router.get(['/', '/index'], homeControllers.index);

router.get('/Nosotros', homeControllers.Nosotros);

router.get('/registro', homeControllers.registro);

router.get('/Sesion', homeControllers.Sesion);

router.get('/contacto', homeControllers.contacto);

export default router;

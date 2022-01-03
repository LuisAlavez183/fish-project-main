import { Router } from 'express';

import sesionControl from '@server/controllers/sesionControl';

const router = new Router();

router.get('/Isesion', sesionControl.Isesion);

router.get('/cotizar', sesionControl.cotizar);

router.get('/ayuda', sesionControl.ayuda);

router.get('/perfil', sesionControl.perfil);

router.get('/reporte', sesionControl.reporte);

export default router;

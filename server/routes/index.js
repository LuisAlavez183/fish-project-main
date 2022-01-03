//importando  router de  home
import homeRouter from './home';
// router  de  users
import usersRouter from './users';

import sesionRouter from './sesion';

/*router.use('/', homeRouter);
router.use('/users', usersRouter);*/

const addRoutes = (app) => {
  app.use('/', homeRouter);
  app.use('/sesion', sesionRouter);
  app.use('/users', usersRouter);

  return app;
};

export default {
  addRoutes,
};

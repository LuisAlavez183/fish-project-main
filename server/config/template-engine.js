import ExpHbs from 'express-handlebars';
import path from 'path';

// exportar una  funcion de  configuracion para
export default (app) => {
  // 1. Registro del motor de plantilla
  app.engine(
    'hbs',
    ExpHbs({
      extname: '.hbs',
      defaultLayout: 'main',
    }),
  );

  //2. Seleccionar el motor de plantilla
  app.set('view engine', 'hbs');
  //3. estableser  ruta  de las vistas
  app.set('views', path.join(__dirname, '..', 'views'));

  return app;
};

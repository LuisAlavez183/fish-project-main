const Isesion = (req, res) => {
  res.render('sesion/Isesion');
};

const cotizar = (req, res) => {
  res.render('sesion/cotizar');
};

const ayuda = (req, res) => {
  res.render('sesion/ayuda');
};

const perfil = (req, res) => {
  res.render('sesion/perfil');
};

const reporte = (req, res) => {
  res.render('sesion/reporte');
};

export default {
  Isesion,
  cotizar,
  ayuda,
  perfil,
  reporte,
};

const index = (req, res) => {
  res.render('home/index', {
    title: 'Luis',
  });
};

const Nosotros = (req, res) => {
  res.render('home/Nosotros');
};

const registro = (req, res) => {
  res.render('home/registro');
};

const Sesion = (req, res) => {
  res.render('home/Sesion');
};

const contacto = (req, res) => {
  res.render('home/contacto');
};

export default {
  index,
  Nosotros,
  registro,
  Sesion,
  contacto,
};

const express = require('express');
const multerConfig = require('./config/multer');
const upload = require('multer')(multerConfig);

const routes = express.Router();

const authMiddleware = require('./app/middlewares/auth');
const guestMiddleware = require('./app/middlewares/guest');

const userController = require('./app/controllers/userController.js');
const SessionController = require('./app/controllers/sessionController.js');

routes.use((req, res, next) => {
  res.locals.flashSuccess = req.flash('success');
  res.locals.flashError = req.flash('error');

  next();
});

routes.get('/', guestMiddleware, SessionController.create);
routes.post('/signin', SessionController.store);

routes.get('/signup', guestMiddleware, userController.create);
routes.post('/signup', upload.single('avatar'), userController.store);

routes.use('/app', authMiddleware);

routes.get('/app/logout', SessionController.destroy);

routes.get('/app/dashboard', (req, res) => {
  console.log(req.session.user);
  return res.render('dashboard');
});

routes.get('/app/cadastro', (req, res) => {
  return res.render('cadastro');
});

module.exports = routes;

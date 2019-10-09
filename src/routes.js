const express = require('express');
const multerConfig = require('./config/multer');
const upload = require('multer')(multerConfig);

const routes = express.Router();

const authMiddleware = require('./app/middlewares/auth');
const guestMiddleware = require('./app/middlewares/guest');

const userController = require('./app/controllers/userController.js');
const cadastroController = require('./app/controllers/cadastroController.js');
const SessionController = require('./app/controllers/sessionController.js');
const relatorioController = require('./app/controllers/relatorioController.js');

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
  return res.render('dashboard');
});

// Rotas para Formulario de Cadastro de animais
routes.get('/app/crud/cadastra_animal', cadastroController.create);
routes.post('/app/crud/cadastra_animal', cadastroController.store);

// Rota para listar animais pendentes
routes.get('/app/crud/busca_pendentes', cadastroController.pendentes);

// Rota para buscar um animal pelo seu numero de controle
routes.post('/app/crud/busca_pendentes', cadastroController.search);

// Rota para exibir pagina de editar animal
routes.get('/app/crud/edita_animal/:id', cadastroController.edita_animal);

// Rota que vai gravar as alteracoes dos dados do animal no banco
routes.post('/app/crud/edita_animal/:id', cadastroController.update);

// Rota para apagar animal
routes.get('/app/crud/apaga_animal/:id', cadastroController.destroy);

// Rotas responsaveis por gerar relatorios da aplicação
routes.get('/app/relatorios/lista_de_relatorios', (req, res) => {
  return res.render('relatorios/lista_de_relatorios');
});
routes.get('/app/relatorios/tabela_relatorios_mes', (req, res) => {
  return res.render('relatorios/tabela_relatorios_mes');
});
routes.post(
  '/app/relatorios/total_por_mes_ano',
  relatorioController.total_por_mes_ano
);
routes.get(
  '/app/relatorios/total_por_bairro',
  relatorioController.total_por_bairro
);
routes.get(
  '/app/relatorios/positivo_teste_rapido',
  relatorioController.positivo_teste_rapido
);
routes.get(
  '/app/relatorios/negativo_teste_rapido',
  relatorioController.negativo_teste_rapido
);
routes.get(
  '/app/relatorios/indeterminado_teste_rapido',
  relatorioController.indeterminado_teste_rapido
);
routes.get(
  '/app/relatorios/positivo_elisa',
  relatorioController.positivo_elisa
);
routes.get(
  '/app/relatorios/negativo_elisa',
  relatorioController.negativo_elisa
);
routes.get(
  '/app/relatorios/indeterminado_elisa',
  relatorioController.indeterminado_elisa
);
routes.get(
  '/app/relatorios/recusa_coleta_elisa',
  relatorioController.recusa_coleta_elisa
);
routes.get('/app/relatorios/eutanasia', relatorioController.eutanasia);
routes.get('/app/relatorios/em_tratamento', relatorioController.em_tratamento);
routes.get(
  '/app/relatorios/recusa_de_ambos',
  relatorioController.recusa_de_ambos
);
routes.get('/app/relatorios/morreu_fugiu', relatorioController.morreu_fugiu);

module.exports = routes;

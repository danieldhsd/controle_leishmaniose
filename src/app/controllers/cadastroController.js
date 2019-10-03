const { Dogs } = require('../models');

class cadastroController {
  create(req, res) {
    return res.render('cadastro');
  }

  async store(req, res) {
    await Dogs.create(req.body);

    return res.redirect('/app/dashboard');
  }
}

module.exports = new cadastroController();

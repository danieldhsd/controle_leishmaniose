const { Animal } = require('../models');

class cadastroController {
  create(req, res) {
    return res.render('auth/signup');
  }

  async store(req, res) {
    await Animal.create(req.body);

    return res.redirect('/dashboard');
  }
}

module.exports = new cadastroController();

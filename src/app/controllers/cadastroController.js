const { Dogs } = require('../models');

class cadastroController {
  create(req, res) {
    return res.render('cadastro');
  }

  async store(req, res) {
    await Dogs.create(req.body);

    return res.redirect('/app/dashboard');
  }

  async update(req, res) {
    const { num_controle } = req.body;

    const dog = await Dogs.findOne({
      where: { num_controle: req.body.num_controle },
    });

    return res.redirect('/app/atualiza_cadastro', { dog });
  }
}

module.exports = new cadastroController();

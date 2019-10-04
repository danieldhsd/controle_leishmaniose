const { Dogs } = require('../models');

class cadastroController {
  create(req, res) {
    return res.render('crud/cadastra_animal');
  }

  async store(req, res) {
    await Dogs.create(req.body);

    return res.redirect('/app/dashboard');
  }

  async pendentes(req, res, next) {
    try {
      const dogs = await Dogs.findAll({
        where: {
          teste_rapido: 'Positivo',
          resultado_teste_gal: ['Positivo', '--'],
        },
      });
      return res.render('crud/busca_pendentes', { dogs });
    } catch (err) {
      return next(err);
    }
  }

  async search(req, res, next) {
    let numero_controle = req.body.param;

    try {
      const dogs = await Dogs.findOne({
        where: {
          num_controle: 789,
        },
      });
      return res.render(`/app/search/`, { dogs });
    } catch (err) {
      return next(err);
    }
  }

  async atualiza(req, res, next) {
    let param = req.params.id;
    try {
      const dog = await Dogs.findOne({
        where: {
          id: param,
        },
      });
      return res.render('crud/edita_animal', { dog });
    } catch (error) {
      return next(err);
    }
  }

  async update(req, res) {
    const { num_controle } = req.body;

    const dog = await Dogs.findOne({
      where: { num_controle: req.num_controle },
    });

    return res.render('search', { dog });
  }

  async destroy(req, res, next) {
    try {
      await Dog.destroy({ where: { num_controle: req.params.num_controle } });

      return res.redirect(`/app/categories`);
    } catch {
      return next(err);
    }
  }
}

module.exports = new cadastroController();

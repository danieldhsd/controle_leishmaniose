const { Dogs } = require('../models');

class cadastroController {
  create(req, res) {
    return res.render('crud/cadastra_animal');
  }

  async store(req, res) {
    await Dogs.create(req.body);

    return res.redirect('/app/dashboard');
  }

  // metodo para listar animais que ainda estão com o cadastro pendente
  async pendentes(req, res, next) {
    try {
      const dogs = await Dogs.findAll({
        where: {
          teste_rapido: 'Positivo',
          resultado_teste_gal: ['Positivo', '--'],
          decisao: ['Eutanasia', '--'],
          veterinario_resp_eutanasia: '',
        },
      });
      return res.render('crud/busca_pendentes', { dogs });
    } catch (err) {
      return next(err);
    }
  }

  // Metodo para buscar um animal pelo seu numero de controle
  async search(req, res, next) {
    let numero_controle = req.body.search;

    try {
      const dogs = await Dogs.findAll({
        where: {
          num_controle: numero_controle,
        },
      });
      return res.render('crud/busca_pendentes', { dogs });
    } catch (err) {
      return next(err);
    }
  }

  // Metodo que mostra a pagina para editar os dados do animal
  async edita_animal(req, res, next) {
    let param = req.params.id;
    try {
      const dog = await Dogs.findOne({
        where: {
          id: param,
        },
      });
      return res.render('crud/edita_animal', { dog });
    } catch (err) {
      return next(err);
    }
  }

  // metodo que grava as alteracoes do animal no banco
  async update(req, res, next) {
    const dog = req.body;

    try {
      await Dogs.update(dog, { where: { id: req.params.id } });
    } catch (err) {
      return next(err);
    }

    return res.redirect('../../crud/busca_pendentes');
  }

  async destroy(req, res, next) {
    const id = req.params.id;

    try {
      await Dogs.destroy({ where: { id: id } });
    } catch (err) {
      return next(err);
    }

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
}

module.exports = new cadastroController();

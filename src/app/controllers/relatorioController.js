// Controle responsavel por gerar os relatorios da aplicação

const { Dogs } = require('../models');
const sequelize = require('sequelize');

class relatorioController {
  async total_por_mes_ano(req, res, next) {
    const mes = req.body.mes;
    const ano = req.body.ano;

    try {
      const dogs = await Dogs.sequelize.query(
        `SELECT bairro, count(num_controle) as quantidade from dogs where month(horario) = ${mes} and year(horario) = ${ano} group by bairro`,
        { type: sequelize.QueryTypes.SELECT }
      );
      return res.render('relatorios/tabela_relatorios_mes', { dogs });
    } catch (err) {
      return next(err);
    }
  }

  async total_por_bairro(req, res, next) {
    try {
      const dogs = await Dogs.findAll({
        attributes: [
          'bairro',
          [sequelize.fn('COUNT', sequelize.col('num_controle')), 'quantidade'],
        ],
        group: ['bairro'],
      });
      return res.render('relatorios/tabela_relatorios', { dogs });
    } catch (err) {
      return next(err);
    }
  }

  async positivo_teste_rapido(req, res, next) {
    try {
      const dogs = await Dogs.findAll({
        attributes: [
          'bairro',
          [sequelize.fn('COUNT', sequelize.col('num_controle')), 'quantidade'],
          ['teste_rapido', 'resultado'],
        ],
        where: {
          teste_rapido: 'Positivo',
        },
        group: ['bairro'],
      });
      return res.render('relatorios/tabela_relatorios', { dogs });
    } catch (err) {
      return next(err);
    }
  }

  async negativo_teste_rapido(req, res, next) {
    try {
      const dogs = await Dogs.findAll({
        attributes: [
          'bairro',
          [sequelize.fn('COUNT', sequelize.col('num_controle')), 'quantidade'],
          ['teste_rapido', 'resultado'],
        ],
        where: {
          teste_rapido: 'Negativo',
        },
        group: ['bairro'],
      });
      return res.render('relatorios/tabela_relatorios', { dogs });
    } catch (err) {
      return next(err);
    }
  }

  async indeterminado_teste_rapido(req, res, next) {
    try {
      const dogs = await Dogs.findAll({
        attributes: [
          'bairro',
          [sequelize.fn('COUNT', sequelize.col('num_controle')), 'quantidade'],
          ['teste_rapido', 'resultado'],
        ],
        where: {
          teste_rapido: 'Indeterminado',
        },
        group: ['bairro'],
      });
      return res.render('relatorios/tabela_relatorios', { dogs });
    } catch (err) {
      return next(err);
    }
  }

  async positivo_elisa(req, res, next) {
    try {
      const dogs = await Dogs.findAll({
        attributes: [
          'bairro',
          [sequelize.fn('COUNT', sequelize.col('num_controle')), 'quantidade'],
          ['resultado_teste_gal', 'resultado'],
        ],
        where: {
          resultado_teste_gal: 'Positivo',
        },
        group: ['bairro'],
      });
      return res.render('relatorios/tabela_relatorios', { dogs });
    } catch (err) {
      return next(err);
    }
  }

  async negativo_elisa(req, res, next) {
    try {
      const dogs = await Dogs.findAll({
        attributes: [
          'bairro',
          [sequelize.fn('COUNT', sequelize.col('num_controle')), 'quantidade'],
          ['resultado_teste_gal', 'resultado'],
        ],
        where: {
          resultado_teste_gal: 'Negativo',
        },
        group: ['bairro'],
      });
      return res.render('relatorios/tabela_relatorios', { dogs });
    } catch (err) {
      return next(err);
    }
  }

  async indeterminado_elisa(req, res, next) {
    try {
      const dogs = await Dogs.findAll({
        attributes: [
          'bairro',
          [sequelize.fn('COUNT', sequelize.col('num_controle')), 'quantidade'],
          ['resultado_teste_gal', 'resultado'],
        ],
        where: {
          resultado_teste_gal: 'Indeterminado',
        },
        group: ['bairro'],
      });
      return res.render('relatorios/tabela_relatorios', { dogs });
    } catch (err) {
      return next(err);
    }
  }

  async recusa_coleta_elisa(req, res, next) {
    try {
      const dogs = await Dogs.findAll({
        attributes: [
          'bairro',
          [sequelize.fn('COUNT', sequelize.col('num_controle')), 'quantidade'],
          ['resultado_teste_gal', 'resultado'],
        ],
        where: {
          resultado_teste_gal: 'Recusa',
        },
        group: ['bairro'],
      });
      return res.render('relatorios/tabela_relatorios', { dogs });
    } catch (err) {
      return next(err);
    }
  }

  async eutanasia(req, res, next) {
    try {
      const dogs = await Dogs.findAll({
        attributes: [
          'bairro',
          [sequelize.fn('COUNT', sequelize.col('num_controle')), 'quantidade'],
          ['decisao', 'resultado'],
        ],
        where: {
          decisao: 'Eutanasia',
        },
        group: ['bairro'],
      });
      return res.render('relatorios/tabela_relatorios', { dogs });
    } catch (err) {
      return next(err);
    }
  }

  async em_tratamento(req, res, next) {
    try {
      const dogs = await Dogs.findAll({
        attributes: [
          'bairro',
          [sequelize.fn('COUNT', sequelize.col('num_controle')), 'quantidade'],
          ['decisao', 'resultado'],
        ],
        where: {
          decisao: 'Tratamento',
        },
        group: ['bairro'],
      });
      return res.render('relatorios/tabela_relatorios', { dogs });
    } catch (err) {
      return next(err);
    }
  }

  async recusa_de_ambos(req, res, next) {
    try {
      const dogs = await Dogs.findAll({
        attributes: [
          'bairro',
          [sequelize.fn('COUNT', sequelize.col('num_controle')), 'quantidade'],
          ['decisao', 'resultado'],
        ],
        where: {
          decisao: 'Recusa',
        },
        group: ['bairro'],
      });
      return res.render('relatorios/tabela_relatorios', { dogs });
    } catch (err) {
      return next(err);
    }
  }

  async morreu_fugiu(req, res, next) {
    try {
      const dogs = await Dogs.findAll({
        attributes: [
          'bairro',
          [sequelize.fn('COUNT', sequelize.col('num_controle')), 'quantidade'],
          ['decisao', 'resultado'],
        ],
        where: {
          decisao: 'Morreu/ Fugiu',
        },
        group: ['bairro'],
      });
      return res.render('relatorios/tabela_relatorios', { dogs });
    } catch (err) {
      return next(err);
    }
  }
}

module.exports = new relatorioController();

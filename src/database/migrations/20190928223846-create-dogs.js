'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Animais', {
      num_controle: {
        allowNull: false,
        type: Sequelize.BIGINT(10),
        primaryKey: true,
        autoIncrement: false,
        unique: true,
      },
      horario: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      nome_proprietario: {
        allowNull: true,
        type: Sequelize.STRING(30),
      },
      rua: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      numero: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      bairro: {
        allowNull: true,
        type: Sequelize.STRING(20),
      },
      telefone: {
        allowNull: true,
        type: Sequelize.STRING(12),
      },
      nome_animal: {
        allowNull: false,
        type: Sequelize.STRING(30),
      },
      genero: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      idade: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      raca: {
        allowNull: true,
        type: Sequelize.STRING(20),
      },
      cor: {
        allowNull: true,
        type: Sequelize.STRING(20),
      },
      pelagem: {
        allowNull: true,
        type: Sequelize.STRING(20),
      },
      porte: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },
      observacoes: {
        allowNull: true,
        type: Sequelize.STRING(300),
      },
      teste_rapido: {
        allowNull: false,
        type: Sequelize.STRING(20),
      },

      // Somente se o teste rápido for positivo
      data_coleta_sangue: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      data_cadastro_gal: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      numero_cadastro_gal: {
        allowNull: true,
        type: Sequelize.BIGINT(10),
      },
      resultado_teste_gal: {
        allowNull: true,
        type: Sequelize.STRING(20),
      },

      // Somente se o resultado do teste do Gal for positivo
      decisao: {
        allowNull: true,
        type: Sequelize.STRING(20),
      },

      // Somente se a decisao for pela eutanasia
      data_eutanasia: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      veterinario_resp_eutanasia: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      observacoes_eutanasia: {
        allowNull: true,
        type: Sequelize.STRING(300),
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('Animal');
  },
};

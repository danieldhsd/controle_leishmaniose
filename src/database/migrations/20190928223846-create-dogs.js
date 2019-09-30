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
        type: Sequelize.STRING,
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
        type: Sequelize.ENUM,
        values: [
          'Açude',
          'Amaral',
          'Aparecida',
          'Bela Vista',
          'Boa Vista',
          'Bom Jardim das Pedras',
          'Cachoeirinha',
          'Cacimba',
          'Centro',
          'Corrego da Prata',
          'Fátima',
          'Glória',
          'Graminha',
          'Japão Grande',
          'Jardim América',
          'Lava-Pés',
          'Lourdes',
          'Padre José Erlei',
          'Parque Industrial',
          'Santo Antônio',
        ],
      },
      telefone: {
        allowNull: true,
        type: Sequelize.STRING(12),
      },
      nome_animal: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      genero: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['Fêmea', 'Macho'],
      },
      idade: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      raca: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      cor: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      pelagem: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      porte: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['Pequeno', 'Medio', 'Grande'],
      },
      observacoes: {
        allowNull: true,
        type: Sequelize.STRING(300),
      },
      teste_rapido: {
        allowNull: false,
        type: Sequelize.ENUM,
        values: ['Positivo', 'Negativo', 'Indeterminado'],
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
        type: Sequelize.ENUM,
        values: ['Positivo', 'Negativo', 'Indeterminado', 'Recusa'],
      },

      // Somente se o resultado do teste do Gal for positivo
      decisao: {
        allowNull: true,
        type: Sequelize.ENUM,
        values: ['Eutanasia', 'Tratamento', 'Recusa', 'Morreu', 'Fugiu'],
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

'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Animal', {
      num_controle: {
        allowNull: false,
        type: DataTypes.BIGINT(10),
        primaryKey: true,
        autoIncrement: false,
        unique: true,
      },
      horario: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      nome_proprietario: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      rua: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      numero: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      bairro: {
        allowNull: true,
        type: DataTypes.ENUM,
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
        type: DataTypes.STRING(12),
      },
      nome_animal: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      genero: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: ['Fêmea', 'Macho'],
      },
      idade: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      raca: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      cor: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      pelagem: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      porte: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: ['Pequeno', 'Medio', 'Grande'],
      },
      observacoes: {
        allowNull: true,
        type: DataTypes.STRING(300),
      },
      teste_rapido: {
        allowNull: false,
        type: DataTypes.ENUM,
        values: ['Positivo', 'Negativo', 'Indeterminado'],
      },

      // Somente se o teste rápido for positivo
      data_coleta_sangue: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      data_cadastro_gal: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      numero_cadastro_gal: {
        allowNull: true,
        type: DataTypes.BIGINT(10),
      },
      resultado_teste_gal: {
        allowNull: true,
        type: DataTypes.ENUM,
        values: ['Positivo', 'Negativo', 'Indeterminado', 'Recusa'],
      },

      // Somente se o resultado do teste do Gal for positivo
      decisao: {
        allowNull: true,
        type: DataTypes.ENUM,
        values: ['Eutanasia', 'Tratamento', 'Recusa', 'Morreu', 'Fugiu'],
      },

      // Somente se a decisao for pela eutanasia
      data_eutanasia: {
        allowNull: true,
        type: DataTypes.DATE,
      },
      veterinario_resp_eutanasia: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      observacoes_eutanasia: {
        allowNull: true,
        type: DataTypes.STRING(300),
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('dogs');
  },
};

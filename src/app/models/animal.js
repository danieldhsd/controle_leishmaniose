module.exports = (sequelize, DataTypes) => {
  const Animal = sequelize.define('Animal', {
    num_controle: DataTypes.BIGINT(10),
    horario: DataTypes.DATE,
    nome_proprietario: DataTypes.STRING,
    rua: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    bairro: DataTypes.ENUM(
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
      'Santo Antônio'
    ),
    telefone: DataTypes.STRING(12),
    nome_animal: DataTypes.STRING,
    genero: DataTypes.ENUM('Fêmea', 'Macho'),
    idade: DataTypes.INTEGER,
    raca: DataTypes.STRING,
    cor: DataTypes.STRING,
    pelagem: DataTypes.STRING,
    porte: DataTypes.ENUM('Pequeno', 'Medio', 'Grande'),
    teste_rapido: DataTypes.ENUM('Positivo', 'Negativo', 'Indeterminado'),
    data_coleta_sangue: DataTypes.DATE,
    data_cadastro_gal: DataTypes.DATE,
    numero_cadastro_gal: DataTypes.BIGINT(10),
    resultado_teste_gal: DataTypes.ENUM(
      'Positivo',
      'Negativo',
      'Indeterminado',
      'Recusa'
    ),
    decisao: DataTypes.ENUM(
      'Eutanasia',
      'Tratamento',
      'Recusa',
      'Morreu',
      'Fugiu'
    ),
    data_eutanasia: DataTypes.DATE,
    veterinario_resp_eutanasia: DataTypes.STRING,
    observacoes_eutanasia: DataTypes.STRING(300),
  });

  return Animal;
};

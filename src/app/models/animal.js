module.exports = (sequelize, DataTypes) => {
  const Animal = sequelize.define('Animal', {
    num_controle: DataTypes.BIGINT(10),
    horario: DataTypes.DATE,
    nome_proprietario: DataTypes.STRING(30),
    rua: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    bairro: DataTypes.STRING(20),
    telefone: DataTypes.STRING(12),
    nome_animal: DataTypes.STRING(30),
    genero: DataTypes.STRING(20),
    idade: DataTypes.INTEGER,
    raca: DataTypes.STRING(30),
    cor: DataTypes.STRING(20),
    pelagem: DataTypes.STRING(20),
    porte: DataTypes.STRING(20),
    observacoes: DataTypes.STRING(300),
    teste_rapido: DataTypes.STRING(20),
    data_coleta_sangue: DataTypes.DATE,
    data_cadastro_gal: DataTypes.DATE,
    numero_cadastro_gal: DataTypes.BIGINT(10),
    resultado_teste_gal: DataTypes.STRING(20),
    decisao: DataTypes.STRING(20),
    data_eutanasia: DataTypes.DATE,
    veterinario_resp_eutanasia: DataTypes.STRING(30),
    observacoes_eutanasia: DataTypes.STRING(300),
  });

  return Animal;
};

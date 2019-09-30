module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    nickname: DataTypes.STRING,
    avatar: DataTypes.STRING,
    password_hash: DataTypes.STRING,
  });

  return User;
};

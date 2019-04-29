'use strict';
module.exports = (sequelize, DataTypes) => {
  const Accounts = sequelize.define('Accounts', {
    accountId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    alias: DataTypes.STRING,
    number: DataTypes.STRING,
    initBalance: DataTypes.DECIMAL(10,2),
    balance: DataTypes.DECIMAL(10,2),    
  }, {});
  Accounts.associate = function (models) {
    // associations can be defined here
  };
  return Accounts;
};
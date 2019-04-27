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
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users', // 'Users' refers to table name
        key: 'userId', // 'userId' refers to column name in persons table
      }
    }
  }, {});
  Accounts.associate = function (models) {
    // associations can be defined here
  };
  return Accounts;
};
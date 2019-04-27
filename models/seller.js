'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sellers = sequelize.define('Sellers', {
    sellerId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    userId: {
      type:DataTypes.INTEGER,
      references: {
        model: 'Users', // 'Users' refers to table name
        key: 'userId', // 'userId' refers to column name in Users table
     }
    },
    showName: DataTypes.BOOLEAN,
    showAddress: DataTypes.BOOLEAN
  });
  Sellers.associate = function(models) {
    // associations can be defined here
  };
  return Sellers;
};
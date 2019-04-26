'use strict';
module.exports = (sequelize, DataTypes) => {
  const shoppingCart = sequelize.define('shoppingCart', {
    userId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users', // 'Users' refers to table name
        key: 'userId', // 'userId' refers to column name in Users table
     }
    },
    productId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'Products', // 'Products' refers to table name
        key: 'productId', // 'productId' refers to column name in Products table
     }
    },
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL(10,2),
  }, {});
  shoppingCart.associate = function (models) {
    // associations can be defined here
  };
  return shoppingCart;
};
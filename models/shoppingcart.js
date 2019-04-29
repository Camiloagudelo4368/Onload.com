'use strict';
module.exports = (sequelize, DataTypes) => {
  const shoppingCart = sequelize.define('shoppingCart', {
    quantity: DataTypes.INTEGER,
    price: DataTypes.DECIMAL(10,2),
    couponCode: DataTypes.STRING,
  }, {});
  shoppingCart.associate = function (models) {
    // associations can be defined here
  };
  return shoppingCart;
};
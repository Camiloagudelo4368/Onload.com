'use strict';
module.exports = (sequelize, DataTypes) => {
  const CategoryProduct = sequelize.define('CategoryProduct', {
  }, {});
  
  CategoryProduct.associate = function(models) {
    // associations can be defined here
  };
  return CategoryProduct;
};
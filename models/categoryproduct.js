'use strict';
module.exports = (sequelize, DataTypes) => {
  const CategoryProduct = sequelize.define('CategoryProduct', {
    productId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'Products', // 'Products' refers to table name
        key: 'productId', // 'productId' refers to column name in Products table
     }
    },
    categoryId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'Categories', // 'Categories' refers to table name
        key: 'categoryId', // 'categoryId' refers to column name in Categories table
     }
    },
  }, {});
  CategoryProduct.associate = function(models) {
    // associations can be defined here
  };
  return CategoryProduct;
};
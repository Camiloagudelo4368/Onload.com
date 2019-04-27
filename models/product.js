'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    productId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    productName: DataTypes.STRING,
    description: DataTypes.STRING,
    imgLink: DataTypes.STRING,
    used: DataTypes.BOOLEAN,
    initQuantity: DataTypes.INTEGER,
    availableQuantity: DataTypes.INTEGER,
    soldCounter: DataTypes.INTEGER,
    uploadDate: DataTypes.DATE,
    price: DataTypes.DECIMAL(10,2),
    size: DataTypes.INTEGER,
    sellerId: {
      type:DataTypes.INTEGER,
      references: {
        model: 'Sellers', // 'Sellers' refers to table name
        key: 'sellerId', // 'sellerId' refers to column name in Sellers table
     }
    },
    categoryId: {
      type:DataTypes.INTEGER,
      references: {
        model: 'Categories', // 'Categories' refers to table name
        key: 'categoryId', // 'categoryId' refers to column name in Categories table
     }
    }
  }, {});
  Products.associate = function(models) {
    // associations can be defined here
  };
  return Products;
};
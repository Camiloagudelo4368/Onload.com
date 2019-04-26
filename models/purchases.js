'use strict';
module.exports = (sequelize, DataTypes) => {
  const Purchases = sequelize.define('Purchases', {
    purchaseId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER
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
    
    userId: {
      type:DataTypes.INTEGER,
      references: {
        model: 'Users', // 'Users' refers to table name
        key: 'userId', // 'userId' refers to column name in persons table
     }
    }
  }, {});
  Purchases.associate = function(models) {
    // associations can be defined here
  };
  return Purchases;
};
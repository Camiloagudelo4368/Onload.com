'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sellers = sequelize.define('Sellers', {
    sellerId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    showName: DataTypes.BOOLEAN,
    showAddress: DataTypes.BOOLEAN
  });

  Sellers.associate = function(models) {
    // associations can be defined here
    models.Sellers.hasMany(models.Products, {
      onDelete: "cascade"
    });

    models.Sellers.belongsTo(models.Users, {onDelete: "cascade"})
  };
  return Sellers;
};
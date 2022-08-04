'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class relationships extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      relationships.belongsTo(models.biodatas,{foreignKey:"biodataId",targetKey:"id"})
      relationships.belongsTo(models.logins,{foreignKey:"gameId",targetKey:"id"})
      relationships.belongsTo(models.histories,{foreignKey:"historyId",targetKey:"id"})   
    }
  }
  relationships.init({
    gameId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    biodataId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    historyId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'relationships',
  });
  return relationships;
};
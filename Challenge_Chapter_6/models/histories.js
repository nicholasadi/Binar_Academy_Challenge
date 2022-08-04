'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class histories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // histories.hasMany(models.relationships,{foreignKey:"historyId", sourceKey:"id"})
      histories.belongsToMany(models.logins,{through:models.relationships,foreignKey:"gameId",as:"histories"})
    }
  }
  
  histories.init({
    timeAccess: {
      type: DataTypes.DATE,
      allowNull:false 
    },
    currentScores: {
      type: DataTypes.INTEGER,
      allowNull:false 
    }
  }, {
    sequelize,
    modelName: 'histories',
  });
  return histories;
};
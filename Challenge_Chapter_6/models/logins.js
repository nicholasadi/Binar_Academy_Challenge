'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class logins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // logins.hasMany(models.relationship,{foreignKey:"gameId",sourceKey:"id"}) 
      logins.belongsToMany(models.histories,{through: models.relationships,foreignKey:"gameId",as:"logins"})        
    }
  }

  logins.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notNull:{
          msg: "Can't be Null"
        }
      }
    }, 
    password: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        is: /^[a-z]+$/i,
        notNull: {
          msg: "Can't be Null"
        }
      }, 
    } 
  }, {
    sequelize,
    modelName: 'logins',
  });
  return logins;
};
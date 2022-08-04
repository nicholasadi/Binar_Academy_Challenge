'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class admins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  admins.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate:{
        notsNull:{
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
    modelName: 'admins',
  });
  return admins;
};
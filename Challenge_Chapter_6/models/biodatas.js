'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class biodatas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      biodatas.hasOne(models.relationships,{foreignKey:"biodataId",sourceKey:"id"})
    }
  }
  
  biodatas.init({
    firstName:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: {
          msg: "Can't be Null"
        }
      }
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: {
          msg: "Can't be Null"
        }
      }
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
      allowNull:false,
      validate:{
        notNull: {
          msg: "Can't be Null"
        }
      }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: {
          msg: "Can't be Null"
        }
      }
    },
    address: {
      type: DataTypes.TEXT,
      allowNull:false,
      validate:{
        notNull: {
          msg: "Can't be Null"
        }
      }
    },
    email:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        isEmail: true,
        notNull: {
          msg: "Can't be Null"
        }
      }
    }, 
    phone:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull: {
          msg: "Can't be Null"
        }
      }
    }, 
  }, {
    sequelize,
    modelName: 'biodatas',
  });
  return biodatas;
};
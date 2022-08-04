'use strict';
const {
  Model
} = require('sequelize');

const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.Histories,{foreignKey:"userId", sourceKey:"id"})
    }

    static #bcrypt(password){
      return bcrypt.hashSync(password,10)
    }

    static register({username,password}){
      const encryptPassword = this.#bcrypt(password)
      return this.create({username,password:encryptPassword})
    }

    checking = password => bcrypt.compareSync(password,this.password)

    static async authentic({username,password}){
      try {
        const user = await this.findOne({where:{username}})
        if (!user) {
          return Promise.reject({
            status:400,
            message:"username and password doesn't match"
          })          
        } else {
          const isValid = user.checking(password)
          if (!isValid) {
            return Promise.reject({
              status:400,
              message:"username and password doesn't match"
            })  
          } else {
            return Promise.resolve(user)
          }
        }
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }


  Users.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};
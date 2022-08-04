const fs = require("fs")
const { resolve } = require('path')
const {User} = require("./user")

class FunctionUser{

  static getAllData() {
    return new Promise((resolve, reject) => {
      fs.readFile("user.json", "utf-8", (err, data) => {
        if (err) {
          const error = {
            status: 404,
            message: "data not found"
          }
          reject(error)
        } else {
          const dataParser = JSON.parse(data)
          const listUsers = []
          dataParser.map((data) => {
            let newUser = new User(data.id, data.name, data.password)
            listUsers.push(newUser)
          })
          resolve(listUsers)
        }
      })
    })
  }


  static writeData(data) {
    return new Promise((resolve, reject) => {
      fs.writeFile("user.json", JSON.stringify(data, null, 2), (err, data)=> {
        if (err) {
          let error = {
            status: 500,
            message: "Database error"
          }
          reject(error)
        } else {
          let success = {
            status: 200,
            message: "Data sent"
          }
          resolve(success)
        }
      })
    })
  }

}
// let cobacoba = new FunctionUser()
// console.log(FunctionUser.getAllData())

module.exports = { FunctionUser }

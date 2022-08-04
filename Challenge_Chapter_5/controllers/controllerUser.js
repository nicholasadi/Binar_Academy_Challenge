const {User} = require("../models/user")
const {FunctionUser} = require("../models/functionUser")

class ControllerUser{

  static async getAllUser(req, res, next) {
    try {
      const listUsers = await FunctionUser.getAllData()
      // console.log(listUsers)
      if (listUsers) {
        res.render("users", {data: listUsers})
        // console.log(listUsers)
      } else {
        throw {
          status: 404,
          message: "data not found"
        }
      }  
    } catch (error) {
      next(error)
    }
  }
 
  static async getUserById(req, res, next) {
   const id = req.params.id
   try {
     const listUsers = await FunctionUser.getAllData()
     if (listUsers) {
       const user = listUsers.find((data) => data.id === Number(id))
       if (user) {
         res.status(200)
         res.render("edit", {data: user})
       } else {
         throw {
           status: 404,
           message: "data not found"
         }
       }
     } else {
       throw {
         status: 404,
         message: "data not found"
       }
     }  
   } catch (error) {
     next(error)
   }
 }
 
 static getUserForm(req, res, next) {
   res.render("new")
 }
 
 static async createUser(req, res, next) {
   const body = req.body
   try {
     const listUsers = await FunctionUser.getAllData()
     if (listUsers) {
       let id = listUsers.length+1 ?? 1
       let newUser = new User(id, body.name, body.password)
       listUsers.push(newUser)
       let writeFile = await FunctionUser.writeData(listUsers)
       if (writeFile.status === 200) {
         res.status(201)
         res.redirect('/')
       } else {
         throw (writeFile)
       }
     } else {
       throw {
         status: 404,
         message: "data not found"
       }
     }
   } catch (error) {
     next(error)
   }
 }
 
 static async putUserById(req, res, next) {
   const body = req.body
   const id = Number(req.params.id)
   try {
     const listUsers = await FunctionUser.getAllData()
     if (listUsers) {
       let indexReplace
       const user = listUsers.find((data, index) => {
         if (data.id === id) {
           indexReplace = index
           return data
         }
       })
       if (user) {
         const newUser = new User(id, body.name, body.password)
         listUsers.splice(indexReplace, 1, newUser)
         let writeFile = await FunctionUser.writeData(listUsers)
         if (writeFile.status === 200) {
           res.status(writeFile.status)
           res.redirect('/users')
         } else {
           throw (writeFile)
         }
       } else {
         throw {
           status: 404,
           message: "data not found"
         }
       }
     } else {
       throw {
         status: 404,
         message: "data not found"
       }
     }  
   } catch (error) {
     next(error)
   }
 }
 
 static async deleteUser(req, res, next) {
   const id = Number(req.params.id)
   try {
     const listUsers = await FunctionUser.getAllData()
     if (listUsers) {
       const newList = listUsers.filter((data) => data.id != id)
       let writeFile = await FunctionUser.writeData(newList)
       console.log(writeFile)
       if (writeFile.status === 200) {
         res.status(writeFile.status)
         res.render("del")
       } else {
         throw (writeFile)
       }
     } else {
       throw {
         status: 404,
         message: "data not found"
       }
     }  
   } catch (error) {
     next(error)
   }
  }

  static async getLoginForm (req,res,next) {
    res.render("login")
  }
  
  static async loginUser(req,res,next){
    const adminName = req.body.name
    const adminPassword = req.body.password
    try {
      let listUsers = await FunctionUser.getAllData()
      const admin = listUsers.find((data)=> data.name === "admin" && data.password === "ganteng")
      if (admin) {
        if (adminName === "admin" && adminPassword === "ganteng") {
          res.redirect("/users")
        }else{
          res.redirect("/users/login")
        }
      }      
    } catch (error) {
      next (error)
    }  
  }
 
 }
//  let cobacobacoba = new ControllerUser()
//  console.log(ControllerUser.loginUser());
 module.exports = {ControllerUser}
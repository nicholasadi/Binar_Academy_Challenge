const {biodatas,histories,logins,relationships,admins} = require("../models")

class ControllerUser{

  static async getAllUser(req, res, next) {

    try {
      const id = req.params;
      const listUsers = await relationships.findAll({include:[logins,biodatas,histories]})
      // console.log(listUsers)
      if (listUsers) {
        // res.send(listUsers)
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
    const listUsers = await relationships.findByPk(id,{include:[logins]})
     if (listUsers) {
       res.send(listUsers)
      //  res.render("edit",{data:listUsers})
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
 
 static async createUserLogin(req, res, next) {
   const body = req.body
   try {
     const listUsers =await logins.create({
         username:body.username,
         password: body.password,
     })
     if (listUsers) {
       res.redirect("/")
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

//  static getBiodataForm(req, res, next) {
//   res.render("biodata")
// }

// static async createBiodataLogin(req, res, next) {
//   const body = req.body
//   try {
//     const listUsers = await biodatas.create({
//         firstName: body.firstName,
//         lastName: body.lastName,
//         dateOfBirth: body.dateOfBirth,
//         gender: body.gender,
//         address: body.address,
//         email: body.email,
//         phone: body.phone,
       //  gameId: body.gameId,
       //  biodataId: body.biodataId,
       //  historyId: body.historyId,
//     })
//     if (listUsers) {
//       res.send(listUsers)
//       // res.redirect("new/biodata")
//     } else {
//       throw {
//         status: 404,
//         message: "data not found"
//       }
//     }
//   } catch (error) {
//     next(error)
//   }
// }
 
 static async putUserById(req, res, next) {
   const body = req.body
   const id = req.params.id
   try {
     const users = await relationships.findByPk(id,{include:[logins]})
    //  res.send(users)
     if (users) {
       const listUsers = await logins.update(
         {
           password : body.password
         }
       )
      //  res.send(listUsers)
        res.redirect('/users/listusers',{data:newUser})           
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
    const listUsers = await relationships.destroy({
      where :{id},
      include:[logins,biodatas,histories]
    })
     if (listUsers) {
      res.redirect('/users/listusers')
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
  static async getAdminLoginForm (req,res,next) {
    res.render("admin")
  }
  
  static async loginUser(req,res,next){
    const name = req.body.username
    const password = req.body.password
    try {
      let listUsers = await logins.findOne({where:{username:name,password:password}})
      if (listUsers) {
      // res.send(listUsers)
      res.redirect("/")
      } else{
        res.redirect("/users/login")
      }     
    } catch (error) {
      next (error)
    }      
  }

  static async loginAdmin(req,res,next){
    const name = req.body.username
    const password = req.body.password
    try {
      let listUsers = await admins.findOne({where:{username:name,password:password}})
      if (listUsers) {
      // res.send(listUsers)
      res.redirect("/users/listusers")
      } else{
        res.redirect("/users/admin")
      }     
    } catch (error) {
      next (error)
    }      
  }
 
 }
//  let cobacobacoba = new ControllerUser()
//  console.log(ControllerUser.loginUser());
 module.exports = {ControllerUser}
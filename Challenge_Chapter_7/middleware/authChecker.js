const jwt = require('jsonwebtoken')
const {Histories,Users} = require('../models')

module.exports = async(req,res,next) =>{
  console.log(req.cookies);
  const token = req.cookies['token']
  try {
    const user = jwt.verify(token,process.env.SECRET)
    console.log(user)
    if (user) {
      const login = await Users.findByPk(user.id) 
      console.log(login);
      if (login) {
        req.user = user
        next()    
        } else {
          throw {
            message:"ga boleh masuk"
          }
      }
    } else {
      throw {
        message:"ga boleh masuk"
      }
    }
  } catch (error) {
    res.clearCookie("token")
    res.redirect('/login')
  }
}





// module.exports = (req,res,next) =>{
//   console.log((req.isAuthenticated()));
//   if (req.isAuthenticated()) {
//     next()
//   } else {
//     res.redirect('/login')
//   }
// }
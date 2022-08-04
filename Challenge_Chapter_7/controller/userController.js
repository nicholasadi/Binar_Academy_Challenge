const {Histories,Users} = require('../models')
// const passport= require('../lib/passport-local')
const passport= require('../lib/passport-jwt')
const jwt=require('jsonwebtoken')


class UserController{
  static register(req,res,next){
    Users.register(req.body)
    .then(()=>{
      res.redirect('/')
    })
    .catch(err=>next(err))
  }

  static login(req,res,next){ 
    Users.authentic(req.body)
    .then((response)=>{
      const payload ={
        id: response.id,
        username: response.username
      }
      const secretKey= process.env.SECRET
      const token = jwt.sign(payload,secretKey,{ expiresIn:'1 hour'})
      // const token = jwt.verify(tokens,secretKey,{complete:true, expiresIn:'1 hour'})
      res.cookie("token",token)
      // console.log(token)
      res.redirect('/')
    })
    .catch(err=>next(err))
  }

  static whoami(req,res,next){
    res.render('profile',{
      username : req.user.dataValues.username,
      title: 'Profile'
    })
    console.log(req.user.dataValues);
    // res.send(req.user)
  }

  static async getHistory(req,res,next){
    try {
      let paramId = Number(req.params.id)
      const history = await Histories.findByPk(paramId)
      res.send(history)      
      // console.log("masuk");
    } catch (error) {
      next(error)
    }
  }
}

module.exports = UserController
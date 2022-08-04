const express = require('express');
const router = express.Router();
// const passport = require('../lib/passport-local')
// const passport = require('../lib/passport-jwt')
const UserController = require('../controller/userController')
const authChecker = require('../middleware/authChecker')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: 'Pingsut Jeneng Game e', login:false, username:"" });
});

router.get('/register', function(req,res,next){
  res.render('register',{ title: 'Register' })
})
router.post('/register',UserController.register)

router.get('/login', function(req,res,next){
  res.render('login',{title: 'Login'})
})
// router.post('/login',passport.authenticate('local',{
//   successRedirect:"/",
//   failureRedirect:"/login",
//   failureFlash:true
// }))
router.post('/login',UserController.login)
// router.use(passport.authenticate('jwt',{session:false}))

router.use(authChecker)

// router.get("/profile",authChecker,UserController.whoami)
router.get("/profile",UserController.whoami)
// router.get("/play-game",authChecker, function(req,res){
//   res.render("playgame",{ title: 'Kuy Dolan' })
// })
router.get("/play-game", function(req,res){
  res.render("playgame",{ title:'Kuy Dolan' })
})
router.get("/history/:id", UserController.getHistory)


module.exports = router;

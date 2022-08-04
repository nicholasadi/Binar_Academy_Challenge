const router = require('express').Router()
const { ControllerUser } = require('../controllers/controllerUser')

router.get('/login',(ControllerUser.getLoginForm))
router.post('/login',(ControllerUser.loginUser))
router.get('/admin',(ControllerUser.getAdminLoginForm))
router.post('/admin',(ControllerUser.loginAdmin))
router.get('/listusers', ControllerUser.getAllUser)
router.get('/new', ControllerUser.getUserForm)
router.post('/new', ControllerUser.createUserLogin)

// router.get('/new/biodata', ControllerUser.getBiodataForm)
// router.post('/new/biodata', ControllerUser.createBiodataLogin)

router.get('/listusers/:id',ControllerUser.getUserById) 
router.post('/listusers/edit/:id', ControllerUser.putUserById)
router.get('/listusers/delete/:id', ControllerUser.deleteUser)

// harsunya pake yang ini di backend. list diatas hanya untuk berhubungan dengan html5 secara langsung saja (hanya menerima POST dan GET) 
// router.put('/edit/:id', ControllerUser.putBookById)
// router.delete('/delete/:id', ControllerUser.deleteBook)

module.exports = { router }
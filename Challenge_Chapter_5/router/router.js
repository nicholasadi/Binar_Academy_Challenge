const router = require('express').Router()
const { ControllerUser } = require('../controllers/controllerUser')

router.get('/', ControllerUser.getAllUser)
router.post('/', ControllerUser.createUser)
router.get('/login',(ControllerUser.getLoginForm))
router.post('/login',(ControllerUser.loginUser))
router.get('/new', ControllerUser.getUserForm)
router.get('/:id',ControllerUser.getUserById) 
router.post('/edit/:id', ControllerUser.putUserById)
router.get('/delete/:id', ControllerUser.deleteUser)

// harsunya pake yang ini di backend. list diatas hanya untuk berhubungan dengan html5 secara langsung saja (hanya menerima POST dan GET) 
// router.put('/edit/:id', ControllerUser.putBookById)
// router.delete('/delete/:id', ControllerUser.deleteBook)

module.exports = { router }
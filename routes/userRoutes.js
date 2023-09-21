const express = require('express')
const { getAllUsers, registerController, loginController } = require('../controllers/userContoller')

//router object
const router = express.Router()

router.get('/all-users',getAllUsers)

//create users
router.post('/register', registerController)

//login post 
router.post('/login', loginController)

module.exports = router;
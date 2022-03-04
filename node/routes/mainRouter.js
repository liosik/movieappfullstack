const express = require("express")
const router = express.Router()
const controller = require('../controllers/mainController')
const validator = require('../middle/validator')

router.post('/register', validator.validateRegister, controller.register)
router.post('/login', validator.validateLogin, controller.login)
router.post('/addmovie', controller.addMovie)
router.post('/addreview', validator.validateReview, controller.addReview)


module.exports = router
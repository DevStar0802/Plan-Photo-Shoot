const router = require('express').Router();
const {
    getHomePage,
    login
} = require('../controllers/mainController')

// '/'
router.route('/').get(getHomePage)

// '/login'
router.route('/login').post(login)

module.exports = router;
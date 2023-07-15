const router = require('express').Router();
const {
    getHomePage,
    login,
    getProfile
} = require('../controllers/mainController')

// '/'
router.route('/').get(getHomePage)

// '/login'
router.route('/login').post(login)

// '/profile'
// router.route('/profile').get(getProfile)
router.get('/profile', async (req, res) => {
    try {
        res.sendFile('profile.html', {
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
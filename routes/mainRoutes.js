const router = require('express').Router();
const { User } = require('../models')

router.get('/', (req, res) => {
    try {
        res.sendFile(__dirname + './index.html', {
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ email: req.body.email })
        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        const validPassword = await userData.comparePassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password, please try again' });
            return;
        }

        res.json({ user: userData, message: 'You are now logged in!' });

    } catch (error) {
        console.error(error)
    }
})

module.exports = router;
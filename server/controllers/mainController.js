const { User } = require('../models')

module.exports = {
    // Get homepage
    async getHomePage(req, res) {
        try {
            res.sendFile(__dirname + './index.html', {
            });
        } catch (err) {
            res.status(500).json(err);
        }
    },


    // Get profile page
    async getProfile(req, res) {
        try {
            console.log(__dirname)
            res.sendFile(__dirname + 'profile.html', {
            });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // log in a user
    async login(req, res) {
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

            req.session.save(() => {
                req.session.user_id = userData.id;
                req.session.logged_in = true;

                res.json({ user: userData, message: 'You are now logged in!' })
            });

        } catch (error) {
            console.error(error)
        }
    },

}
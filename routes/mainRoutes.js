const router = require('express').Router();

router.get('/', (req, res) => {
    try {
        res.sendFile(__dirname + './index.html', {
        });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
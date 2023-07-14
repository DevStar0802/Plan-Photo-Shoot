const router = require('express').Router();
const userRoutes = require('./userRoutes');
const jobRoutes = require('./jobRoutes');

router.use('/user', userRoutes);
router.use('/job', jobRoutes);

module.exports = router;
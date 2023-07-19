const router = require('express').Router();
const {
    getJobs,
    getOneJob,
    createJob,
    deleteJob,
    updateJob
} = require('../../controllers/jobController.js');

// /api/job
router.route('/').get(getJobs).post(createJob);

// /api/job/focus
router
    .route('/focus')
    .get(getOneJob)
    .put(updateJob)
    .delete(deleteJob);

module.exports = router;
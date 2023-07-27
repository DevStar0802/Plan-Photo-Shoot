const router = require('express').Router();
const upload = require('../../utils/upload')
const {
    getJobs,
    getOneJob,
    createJob,
    deleteJob,
    updateJob,
} = require('../../controllers/jobController.js');

const { getBuckets } = require('../../controllers/uploadController.js')

// /api/job
router.route('/').get(getJobs).post(createJob);

// /api/job/focus
router
    .route('/focus')
    .post(getOneJob)
    .put(updateJob)
    .delete(deleteJob);

// /api/job/upload
// router.route('/upload').post(upload.array('pictures'), handleFileUpload)
router.route('/upload').get(getBuckets)

module.exports = router;
const { User, Job } = require('../models')

module.exports = {
    // Get all jobs
    async getJobs(req, res) {
        try {
            const jobs = await Job.find();
            res.json(jobs);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Get a job
    async getOneJob(req, res) {
        try {
            const job = await Job.findOne({ jobName: req.body.jobName })
                .select('-__v');

            if (!job) {
                return res.status(404).json({ message: 'No job with that name!' });
            }

            res.json({ job: job, message: 'Success' });
        } catch (err) {
            res.status(500).json(err);
        }
    },
    // Create a job
    async createJob(req, res) {
        try {
            const job = await Job.create(req.body);
            res.json({ job: job, message: "Success" });
        } catch (err) {
            return res.status(500).json('Error creating job:', err);
        }
    },

    // Delete a job
    async deleteJob(req, res) {
        try {
            const user = await User.findOneAndUpdate(
                { email: req.body.email },
                { $pull: { jobs: req.body.jobId } },
                { new: true }
            );

            const job = await Job.findOneAndDelete({ _id: req.body.jobId });
            if (!job) {
                res.json({ message: 'No job with that Id' });
            }
            res.json({ message: 'Success', user: user });
            console.log(user);

        } catch (err) {
            res.status(500).json(err);
        }
    },

    // Update a job
    async updateJob(req, res) {
        try {
            const job = await Job.findOneAndUpdate(
                { jobName: req.body.jobName },
                { $set: req.body },
                { runValidators: true, new: true }
            );

            if (!job) {
                res.status(404).json({ message: 'No job with this name!' });
            }

            res.json(job);
        } catch (err) {
            res.status(500).json(err);
        }
    },
}
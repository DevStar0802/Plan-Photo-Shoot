const { Schema, model } = require('mongoose')

//Schema to create Project model
const jobSchema = new Schema(
    {
        jobName: {
            type: String,
            required: true,
        },
        custName: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        sqFt: {
            type: Number,
            required: true,
        },
        milesFromAir: {
            type: Number,
            required: false,
        },
        nickName: {
            type: String,
            required: false,
        },
        drone: {
            type: Boolean,
            required: true,
        },
        photos: {
            type: Boolean,
            required: true,
        },
        tour: {
            type: Boolean,
            required: true
        }
    }
)

const Job = model('job', jobSchema);

module.exports = { Job }
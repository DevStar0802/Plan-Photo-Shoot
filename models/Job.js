const { Schema, model } = require('mongoose')

//Schema to create Project model
const jobSchema = new Schema(
    {
        jobName: {
            type: String,
            required: true,
            unique: true
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
        },
        date: {
            type: Date,
            default: Date.now,
        },
    }
)

const Job = model('job', jobSchema);

module.exports = { Job }
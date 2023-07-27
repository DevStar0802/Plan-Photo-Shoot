const AWS = require('aws-sdk')
const AWS3 = require('@aws-sdk/client-s3')
require('dotenv').config();

//user is 'test'
// target bucket is 'text-bucket-bb'
const region = process.env.REGION
const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY

AWS.config.update({ region, credentials: { accessKeyId, secretAccessKey } })

const s3Instance = new AWS3.S3({ region, credentials: { accessKeyId, secretAccessKey } })

module.exports = {
    AWS,
    s3Instance
}
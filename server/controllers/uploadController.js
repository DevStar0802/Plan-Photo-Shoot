const AwsClient = require('./client');
const { ListBucketsCommand, PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3');

module.exports = {
    // List all s3 buckets
    async getBuckets(req, res) {
        try {
            const command = new ListBucketsCommand({});
            const response = await AwsClient.s3Instance.send(command);
            res.send(response.Buckets);
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    },

    async uploadFiles(req, res) {
        try {
            if (!req.file) {
                return res.status(400).send('No file uploaded');
            }

            const fileContent = fs.readFileSync(req.file.path); // Read the file from the temporary path
            const params = {
                Bucket: 'text-bucket-bb',
                Key: req.file.originalname, // Use the original file name in the S3 bucket
                Body: fileContent
            };

            const command = new PutObjectCommand(params);
            await AwsClient.s3Instance.send(command);

            fs.unlinkSync(req.file.path); // Delete the temporary file

            res.send('File uploaded successfully!');
        } catch (error) {
            console.log(error);
            res.status(500).send('Error uploading the file');
        }
    }

    // async downloadFiles(req, res) {
    //     const command = new GetObjectCommand({
    //         Bucket: "text-bucket-bb",
    //         Key: "calendar.png"
    //     });
    //     try {
    //         const response = await AwsClient.s3Instance.send(command);
    //         console.log(response.Body)

    //     } catch (error) {
    //         console.log(error);
    //         res.status(500).send('Error downloading the file');
    //     }
    // }
}
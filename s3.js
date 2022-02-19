
const AWS = require('aws-sdk');

const { randomBytes } = require('crypto'); // change later
const { promisify } = require('util') // change later I think?
const dotenv = require('dotenv');
dotenv.config();


const { aws_config } = require('./config');

const region = aws_config.region
const bucketName = aws_config.bucketName
const accessKeyId = aws_config.accessKeyId
const secretAccessKey = aws_config.secretAccessKey


const s3 = new AWS.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})


async function generateUploadURL() {
    // Create random image name - more secure
    const rawBytes = await randomBytes(16);
    const imageName = rawBytes.toString('hex');

    const params = ({
        Bucket: bucketName,
        Key: imageName,
        Expires: 60 // url will expire after 1 min
    });

    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL
}


module.exports = { generateUploadURL };

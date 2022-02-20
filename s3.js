
const AWS = require('aws-sdk');

const { randomBytes } = require('crypto');

const { aws_config } = require('./config');

const region = aws_config.region
const bucketName = aws_config.bucketName
const accessKeyId = aws_config.accessKeyId
const secretAccessKey = aws_config.secretAccessKey
const signatureVersion = aws_config.signatureVersion

const s3 = new AWS.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion
})


async function createUploadURL() {
    const params = ({
        Bucket: bucketName,
        Key: await randomBytes(20).toString('hex'),
        Expires: 60 // url will expire after 1 min
    });

    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL;
}


module.exports = { createUploadURL };

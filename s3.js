
const AWS = require('aws-sdk');

const { randomBytes } = require('crypto'); // change later
// const dotenv = require('dotenv');
// dotenv.config();

// const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
// const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
// https://aws.amazon.com/blogs/developer/generate-presigned-url-modular-aws-sdk-javascript/
// const client = new S3Client(clientParams);
// const command = new PutObjectCommand(input);

// const url = async () => {
//     return await getSignedUrl(client, command, { expiresIn: 3600 });
// }


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
    // Create random image name - more secure
    // const key = await randomBytes(20).toString('hex');

    const params = ({
        Bucket: bucketName,
        // generate random path for added security
        Key: await randomBytes(20).toString('hex'),
        Expires: 60 // url will expire after 1 min
    });

    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    console.log(uploadURL);
    return uploadURL

}


module.exports = { createUploadURL };

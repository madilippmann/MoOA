module.exports = {
  environment: process.env.NODE_ENV || "development",
  port: process.env.PORT || 8080,
  sessionSecret: process.env.SESSION_SECRET,
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
  },
  aws_config: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
    bucketName: process.env.AWS_BUCKET_NAME,
    signatureVersion: process.env.AWS_SIGNATURE_VERSION
  }
};

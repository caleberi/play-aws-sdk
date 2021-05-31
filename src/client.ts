import { S3Client } from "@aws-sdk/client-s3";

// set AWS Region.
const AWS_REGION = "us-east"
const s3Client = new S3Client({
    region: AWS_REGION
});

export { s3Client };
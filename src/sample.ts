import { PutObjectCommand, CreateBucketCommand } from "@aws-sdk/client-s3";
import { s3Client } from "./client";

//set the parameter
const params = {
    Bucket: "sample_bucket_101",  // The name of the bucket. For example, 'sample_bucket_101'.
    Key: "sample_upload.txt", // The name of the object. For example, 'sample_upload.txt'.
    Body: "BODY", // The content of the object. For example, 'Hello world!".
};

const run = async () => {
    try {
        const data = await s3Client.send(new CreateBucketCommand({
            Bucket: params.Bucket,
        }));
        console.log(data);
        console.log("Successful created a bucket called", data.Location);
        return data;
    } catch (err) {
        console.log("Error", err);
    }

    // Create an object and upload it to the Amazon S3 bucket.
    try {
        const results = await s3Client.send(new PutObjectCommand(params));
        console.log(
            "Successfully created " +
            params.Key +
            " and uploaded it to " +
            params.Bucket +
            "/" +
            params.Key
        );
        return results; // For unit tests.
    } catch (err) {
        console.log("Error", err);
    }
};

run();
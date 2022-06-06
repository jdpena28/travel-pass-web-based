import { SNSClient } from "@aws-sdk/client-sns";

export const sns = new SNSClient({
    region: "ap-southeast-1",
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    }
})

export default sns
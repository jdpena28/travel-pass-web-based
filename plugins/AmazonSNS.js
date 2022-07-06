import { SNSClient } from "@aws-sdk/client-sns";

export const sns = (KEYID, ACCESSKEY) => new SNSClient({
    region: "ap-southeast-1",
    credentials: {
        accessKeyId: KEYID,
        secretAccessKey: ACCESSKEY,
    }
})

export default sns
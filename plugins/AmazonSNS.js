import { SNSClient } from "@aws-sdk/client-sns";

const sns = new SNSClient({
    region: "ap-southeast-1",
})

export default sns
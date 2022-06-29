<template>
  <section id="test">
    <h1>Insert a number to subscribe</h1>
    <input id="number" v-model="value" class="border-black border-2" type="number" name="number" />
    <button @click="sendMessage">Send Message</button>
  </section>
</template>

<script>
import {SubscribeCommand} from '@aws-sdk/client-sns'
import { sns } from '~/plugins/AmazonSNS'
export default {
  name: 'TestPage',
  data() {
    return {
      value: '',
    }
  },
  methods: {
    async sendMessage() {
        // eslint-disable-next-line prefer-const
        let params = {
            TopicArn: "arn:aws:sns:ap-southeast-1:847804464306:OneBataan-TP",
            Protocol: "sms",
            Endpoint: "+639" + this.value,
        }
        const data = await sns.send(new SubscribeCommand(params))
        console.log(data)
    }
  }
}
</script>

<style>
</style>
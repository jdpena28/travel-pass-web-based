<template>
  <section id="log-in" class="h-screen w-full bg-cover">
    <NavigationBar />
    <div class="container pb-3 mx-auto space-y-2">
      <div
        class="
          flex
          rounded-3xl
          text-center text-8xl
          font-bold
          text-white
          white-full
          bg-blue-500
          justify-center
          items-center
          mt-2
        ">
        <img
          src="~/assets/images/White-Logo.png"
          alt="Ticket Background"
          width="250px" />
        <h1 class="flex-col justify-center">ITS MORE FUN IN BATAAN</h1>
      </div>
      <p
        class="text-lg bg-green-300 mt-3 ml-32 p-3 rounded-xl w-max capitalize">
        Welcome👋: {{ name ? name : email }}
      </p>
      <div class="flex flex-col w-[full] pl-32 mx-auto">
        <p class="text-xl font-bold text-blue-400">Personal Information</p>
      </div>

      <form class="w-full flex flex-wrap mx-auto pl-28" action="">
        <div class="w-full flex gap-x-[5%]">
          <SignUp
            v-model.lazy="form.lastName"
            class="w-[30%]"
            type="text"
            labelForSignUp="Last Name"
            placeholder="Licnep" />
          <SignUp
            v-model.lazy="form.firstName"
            class="w-[30%]"
            type="text"
            labelForSignUp="First Name"
            placeholder="Rodis" />
          <SignUp
            v-model.lazy="form.middleName"
            class="w-[20%]"
            type="text"
            labelForSignUp="Middle"
            placeholder="B" />
        </div>
        <div class="w-full flex gap-x-[5%]">
          <SignUp
            v-model.lazy="form.age"
            class="w-[15%]"
            type="number"
            labelForSignUp="Age"
            placeholder="e.g 18" />
          <SignUp
            v-model.lazy="form.email"
            class="w-[35%]"
            type="email"
            labelForSignUp="Email Address"
            placeholder="deeznut@gmail.com" />
          <SignUp
            v-model.lazy="form.bday"
            class="w-[30%]"
            type="date"
            labelForSignUp="Birthday" />
        </div>
        <div class="w-full flex gap-x-[5%]">
          <SignUp
            v-model.lazy="form.contactNum"
            class="w-[30%]"
            type="number"
            labelForSignUp="Contact Number"
            placeholder="e.g 0912" />
          <label
            class="w-[30%] font-semibold text-sm text-blue-500 p-4"
            for="Travel Requirements">
            Travel Requirements<br />
            <input
              class="
                w-full
                rounded
                pl-2
                text-black text-lg
                bg-gray-50
                outline-none
                mb-[4px]
              "
              type="file"
              name="Travel Requirements"
              placeholder="Select a file"
              multiple @change = "uploadFile" />
            <div
              class="
                rounded
                bg-gradient-to-r
                pb-[3px]
                from-[#e05252]
                via-[#6588df]
                to-[#15EEFC]
                mb-1
              "></div>
          </label>
        </div>
        <div class="flex w-[150%] pl-32 rounded-md bg-blue-500 ml-[-7rem]">
          <p class="text-xl font-bold text-white">Travel Information</p>
        </div>
        <div class="w-full flex gap-x-[5%]">
          <SignUp
            v-model.lazy="form.from"
            class="w-[30%]"
            type="text"
            labelForSignUp="From"
            placeholder="Manila" />
          <SignUp
            v-model.lazy="form.arrivalDate"
            class="w-[20%]"
            type="date"
            labelForSignUp="Arrival Date" />
          <SignUp
            v-model.lazy="form.purposeVisit"
            class="w-[30%]"
            type="text"
            labelForSignUp="Purpose of Visit"
            placeholder="e.g" />
        </div>
        <div class="w-full flex gap-x-[5%]">
          <SignUp
            v-model.lazy="form.destination"
            class="w-[30%]"
            type="text"
            labelForSignUp="Destination"
            placeholder="Balanga, Bataan" />
          <SignUp
            v-model.lazy="form.exitDate"
            class="w-[20%]"
            type="Date"
            labelForSignUp="Exit Date" />
          <SignUp
            v-model.lazy="form.modeOfTransport"
            class="w-[30%]"
            type="text"
            labelForSignUp="Mode of tranport"
            placeholder="SUV" />
        </div>
        <div class="w-full flex justify-between mx-3">
          <button
            class="
              rounded-xl
              text-lg
              bg-blue-500
              text-white
              font-bold
              px-8
              py-2
            "
            type="button"
            @click="backAtLogIn">
            Back
          </button>
          <button
            class="
              rounded-xl
              text-lg
              bg-blue-500
              text-white
              font-bold
              px-8
              py-2
            "
            type="button"
            @click="handleSubmit">
            Submit
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import {SubscribeCommand} from '@aws-sdk/client-sns'
import { doc, setDoc } from 'firebase/firestore'
import { ref, uploadBytes } from 'firebase/storage'
import { sns } from '~/plugins/AmazonSNS'
import { db, storage } from '~/plugins/firebase.js'

export default {
  name: 'TravelForm',
  middleware: ['authProtection'],

  data() {
    return {
      name: this.$store.state.auth.displayName,
      email: this.$store.state.auth.email,
      form: {
        lastName: '',
        firstName: '',
        middleName: '',
        age: '',
        email: '',
        bday: '',
        contactNum: '',
        from: '',
        arrivalDate: '',
        purposeVisit: '',
        destination: '',
        exitDate: '',
        modeOfTransport: '',
        lastViewed: null,
        files: [],
      },
    }
  },
  head() {
    return {
      title: '1Bataan | Travel Form',
    }
  },
  methods: {
    uploadFile(e) {
      this.form.files = e.target.files
    },
    async handleSubmit() {
      const params = {
            TopicArn: "arn:aws:sns:ap-southeast-1:847804464306:OneBataan-TP",
            Protocol: "sms",
            Endpoint: this.form.contactNum
        }
      await sns(this.$config.AWS_ACCESS_KEY_ID,this.$config.AWS_SECRET_ACCESS_KEY).send(new SubscribeCommand(params))
      await setDoc(doc(db, 'travel-form', this.$store.state.auth.uid), {
        ...this.form,
        status: 'Pending',
        files: 'referInStorageBucket'
      })
        .then(async (res) => {
          const storageRef = ref(storage, `/${this.$store.state.auth.uid}/`)
          for(let i = 0 ; i < this.form.files.length ; i++) {
            const pointer = ref(storageRef, this.form.files[i].name)
            await uploadBytes(pointer, this.form.files[i])
            // use promise all to upload all files
          }
           this.$router.push('/travelpass/ticket/pending')
            setTimeout(() => {
            this.$router.go(this.$router.currentRoute.path)
          }, 1000)
        })
    },
  },
}
</script>

<style></style>

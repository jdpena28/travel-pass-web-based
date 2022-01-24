<template>
  <section id="log-in" class="h-screen w-full bg-cover">
    <NavigationBar />
    <h1 class="text-xl bg-green-300 mt-3 ml-2 p-3 rounded-xl w-max capitalize">
      Welcome👋: {{ name ? name : email }}
    </h1>
    <div class="container pb-3 mx-auto space-y-2">
      <div
        class="flex flex-col rounded-3xl w-full bg-blue-500 mt-2 pb-36"></div>
      <div class="flex flex-col w-[full] pl-32 mx-auto">
        <p class="text-xl font-bold text-blue-400">Personal Information</p>
      </div>
      <form
        class="w-full flex flex-wrap mx-auto pl-28"
        action=""
        @submit.prevent="handleSubmit">
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
          <SignUp
            class="w-[30%]"
            type="file"
            labelForSignUp="Travel Requirements"
            placeholder="Upload Files" />
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
            class="rounded-xl text-lg bg-blue-500 text-white font-bold px-8 py-2"
            type="button"
            @click="backAtLogIn">
            Back
          </button>
          <button
            class="rounded-xl text-lg bg-blue-500 text-white font-bold px-8 py-2"
            type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TravelForm',
  // middleware: ['authProtection'],
  data() {
    return {
      name: this.$store.state.auth.displayName,
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
      },
    }
  },
  head() {
    return {
      title: '1Bataan | Travel Form',
    }
  },
  head() {
    return {
      title: '1Bataan | Travel Form',
    }
  },
  methods: {
    handleSubmit() {
      this.$store.commit('SET_FORM', this.form)
      console.log(this.$store.state.form)
    },
  },
}
</script>

<style></style>

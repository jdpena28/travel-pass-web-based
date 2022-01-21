<template>
  <section id="log-in" class="h-screen w-full bg-cover">
    <NavigationBar />
    <div class="container mx-auto space-y-2">
      <div class="flex flex-col rounded-3xl w-full bg-cyan-500 mt-2 pb-36">
        <h1 class="text-3xl">HELLO: {{ name }}</h1>
      </div>
      <div class="flex flex-col w-[full] pl-32 mx-auto">
        <p class="text-xl font-bold text-cyan-400">Personal Information</p>
      </div>
      <form class="w-full flex flex-wrap mx-auto pl-28" action="">
        <div class="w-full flex gap-x-[5%]">
          <SignUp
            class="w-[30%]"
            type="text"
            labelForSignUp="Last Name"
            placeholder="Licnep" />
          <SignUp
            class="w-[30%]"
            type="text"
            labelForSignUp="First Name"
            placeholder="Rodis" />
          <SignUp
            class="w-[20%]"
            type="text"
            labelForSignUp="Middle"
            placeholder="B" />
        </div>
        <div class="w-full flex gap-x-[5%]">
          <SignUp
            class="w-[15%]"
            type="number"
            labelForSignUp="Age"
            placeholder="e.g 18" />
          <SignUp
            class="w-[35%]"
            type="email"
            labelForSignUp="Email Address"
            placeholder="deeznut@gmail.com" />
          <SignUp class="w-[30%]" type="date" labelForSignUp="Birthday" />
        </div>
        <div class="w-full flex gap-x-[5%]">
          <SignUp
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
        <div class="flex w-[150%] pl-32 rounded-md bg-cyan-500 ml-[-7rem]">
          <p class="text-xl font-bold text-white">Travel Information</p>
        </div>
        <div class="w-full flex gap-x-[5%]">
          <SignUp
            class="w-[30%]"
            type="text"
            labelForSignUp="From"
            placeholder="Manila" />
          <SignUp class="w-[20%]" type="date" labelForSignUp="Arrival Date" />
          <SignUp
            class="w-[30%]"
            type="text"
            labelForSignUp="Purpose of Visit"
            placeholder="e.g" />
        </div>
        <div class="w-full flex gap-x-[5%]">
          <SignUp
            class="w-[30%]"
            type="text"
            labelForSignUp="Destination"
            placeholder="Balanga, Bataan" />
          <SignUp class="w-[20%]" type="Date" labelForSignUp="Exit Date" />
          <SignUp
            class="w-[30%]"
            type="text"
            labelForSignUp="Mode of tranport"
            placeholder="SUV" />
        </div>
        <div class="w-full flex justify-between mx-3">
          <button
            class="rounded-xl text-lg bg-cyan-500 text-white font-bold px-8 py-2"
            type="button"
            @click="backAtLogIn">
            Back
          </button>
          <button
            class="rounded-xl text-lg bg-cyan-500 text-white font-bold px-8 py-2"
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
  middleware: ['authProtection'],
  data() {
    return {
      name: this.$store.state.auth.displayName,
    }
  },
  methods: {
    backAtLogIn() {
      this.$router.push('/login')
    },
  },
}
</script>

<style></style>

<template>
  <section id="Sign-up" class="h-screen w-full bg-slate-300">
    <div class="container pt-16 flex justify-center items-center mx-auto">
      <div
        id="card items-center"
        class="bg-white w-[30%] rounded-3xl shadow-2xl">
        <div class="header">
          <h3 class="Create">Create a new account</h3>
          <p class="Continue.">To Continue</p>
        </div>
        <form
          class="w-full px-4 flex flex-col items-center gap-y-2"
          action=""
          @submit.prevent="handleSubmit">
          <InputField
            v-model="email"
            type="email"
            label="Email or Username"
            placeholder="Example@email.com" />
          <InputField
            v-model="pass"
            type="password"
            label="Password"
            placeholder="password" />
          <InputField
            v-model="passConfirm"
            type="password"
            label="Retype-Password"
            placeholder="Retype-password" />
          <div
            class="w-full cursor-pointer text-right font-medium text-red-500"></div>
          <div
            class="w-max text-center p-[2px] mb-20 rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
            <button
              class="bg-white px-16 py-1 font-semibold rounded-full"
              type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'
import Vue from 'vue'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
const auth = getAuth()
Vue.use(VueToast, {
  position: 'bottom',
  duration: 2000,
})
export default {
  name: 'SignUp',
  data() {
    return {
      email: '',
      pass: '',
      passConfirm: '',
    }
  },
  methods: {
    handleSubmit() {
      if (this.pass !== this.passConfirm) {
        Vue.$toast.error('Password mismatch')
      } else {
        createUserWithEmailAndPassword(auth, this.email, this.pass)
          .then(() => {
            Vue.$toast.success('Account created')
            setTimeout(() => {
              this.$router.push('/login')
            }, 1900)
          })
          .catch((err) => {
            Vue.$toast.error(err.message)
          })
      }
    },
  },
}
</script>

<style>
.header {
  padding: 3.2rem;
  margin-top: 1.1rem;
  color: black;
}
.Create {
  font-weight: 700;
  font-size: 1.5rem;
  background: -webkit-linear-gradient(
    120deg,
    rgba(135, 204, 254, 0.93),
    rgb(12, 104, 237, 1)
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
.Continue {
  line-height: 0;
  font-size: 1rem;
  font-weight: bold;
}
</style>

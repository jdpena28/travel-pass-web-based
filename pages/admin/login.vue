<template>
  <section id="admin-login" class="h-screen bg-slate-200">
    <div class="relative container mx-auto h-full">
      <div
        class="absolute bg-white shadow-2xl shadow-gray-700 inset-0 m-auto rounded-3xl h-3/4 max-w-4xl flex justify-around items-center">
        <img
          src="~/assets/images/admin_illustration.jpg"
          height="300"
          width="300"
          alt="admin illustration" />
        <div class="flex flex-col justify-around h-3/5">
          <h1 class="self-start text-2xl font-semibold">
            ADMINISTRATOR LOGIN
            <br />
          </h1>

          <ButtonLogIn
            className="w-full  flex gap-x-3 px-[1.9rem] py-1 items-center bg-white rounded-lg"
            logo="google"
            btnText="LOGIN WITH GOOGLE"
            alt="google"
            @clickAuth="googleLogIn" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import Vue from 'vue'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
Vue.use(VueToast, {
  position: 'bottom',
  duration: 2000,
})
const auth = getAuth()
export default {
  name: 'AdminLoginPage',
  head() {
    return {
      title: '1Bataan | Admin Login',
    }
  },
  methods: {
    googleLogIn() {
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider)
        .then((result) => {
          this.$store.commit('SET_ADMIN_AUTH', result)
          this.$router.push('/admin/dashboard')
        })
        .catch((error) => {
          console.log(error)
          Vue.$toast.error(
            'Providers Authentication Error, Try Different Login Method'
          )
        })
    },
  },
}
</script>
<style></style>

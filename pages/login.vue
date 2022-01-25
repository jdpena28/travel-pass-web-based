<template>
  <section id="log-in" class="h-screen w-full bg-cover">
    <NavigationBar />
    <div class="container h-[90%] flex justify-center items-center mx-auto">
      <!--insert your code here-->
      <div
        class="bg-white/30 backdrop-blur-md flex justify-end w-[75%] h-[79%] rounded-3xl">
        <div id="card" class="h-full relative w-[50%] rounded-3xl shadow-lg">
          <img
            class="h-max w-max absolute inset-0 m-auto"
            src="~/assets/images/form_illustration.png"
            alt="Form Illustration"
            height="329.67px"
            width="244px" />
        </div>
        <div id="card" class="bg-white h-full w-[50%] rounded-3xl shadow-lg">
          <div class="header">
            <h3 class="hello">Hello Traveler</h3>
            <p class="sign">Sign in to Continue</p>
          </div>
          <form
            class="w-full px-8 flex flex-col items-center gap-y-2"
            action=""
            @submit.prevent="handleSubmit">
            <InputField
              key="email"
              v-model="email"
              type="email"
              label="Email or Username"
              placeholder="johndoe@email.com" />
            <InputField
              v-model="password"
              type="password"
              label="Password"
              placeholder="password" />
            <div
              class="w-full cursor-pointer text-right font-medium text-red-500">
              <p href="" @click="resetPassword">Forgot Password?</p>
            </div>
            <div
              class="w-max text-center p-[3px] rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
              <button
                class="bg-white px-16 py-1 font-semibold rounded-full"
                type="submit">
                Submit
              </button>
            </div>
          </form>
          <div class="flex justify-around items-center gap-x-4 px-9 mt-4">
            <div class="w-full h-[2px] bg-slate-800 rounded-full"></div>
            <span>OR</span>
            <div class="w-full h-[2px] bg-slate-800 rounded-full"></div>
          </div>
          <div class="space-y-2 mt-3 flex flex-col items-center">
            <ButtonLogIn
              className="w-full  flex gap-x-3 px-[1.9rem] py-1 items-center bg-white rounded-lg"
              logo="google"
              btnText="LOGIN WITH GOOGLE"
              alt="google"
              @clickAuth="googleLogIn" />
            <ButtonLogIn
              className="w-full flex gap-x-3 px-5 py-1 items-center bg-white rounded-lg"
              logo="facebook"
              btnText="LOGIN WITH FACEBOOK"
              alt="facebook"
              @clickAuth="facebookLogIn" />
          </div>
          <div class="flex text-sm justify-center gap-x-3 mt-1">
            <p>Don't have an Account ?</p>
            <p class="font-semibold text-red-500">Register Here</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  sendPasswordResetEmail,
} from 'firebase/auth'
import Vue from 'vue'
import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-sugar.css'
Vue.use(VueToast, {
  position: 'bottom',
  duration: 2000,
})
const auth = getAuth()

export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  head() {
    return {
      title: '1 Bataan | Login',
    }
  },
  methods: {
    googleLogIn() {
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider)
        .then((result) => {
          this.$store.commit('SET_AUTH', result)
          this.$router.push('/travelpass/travel-form')
        })
        .catch((error) => {
          console.log(error)
          Vue.$toast.error(
            'Providers Authentication Error, Try Different Login Method'
          )
        })
    },
    facebookLogIn() {
      const provider = new FacebookAuthProvider()
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result)
        })
        .then((result) => {})
        .catch((error) => {
          console.log(error)
        })
    },
    handleSubmit() {
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((result) => {
          this.$store.commit('SET_AUTH', result)
          this.$router.push('/travelpass/travel-form')
        })
        .catch((error) => {
          if (error.code === 'auth/user-not-found') {
            Vue.$toast.error('User Not Found')
          } else if (error.code === 'auth/wrong-password') {
            Vue.$toast.error('Wrong Password')
          } else {
            Vue.$toast.error('Something Went Wrong')
          }
        })
    },
    resetPassword() {
      if (!this.email) {
        Vue.$toast.error('Please enter your email address at input field')
      } else {
        sendPasswordResetEmail(auth, this.email)
          .then((result) => {
            Vue.$toast.success('Password Reset send via Email')
          })
          .catch((error) => {
            console.log(error)
          })
      }
      sendPasswordResetEmail(auth, this.email)
        .then((result) => {
          console.log(result)
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
}
</script>
<style scoped>
#log-in {
  background-image: url('~assets/images/signUpBackground.png');
}
.header {
  padding: 1.2rem;
  margin-top: 1.1rem;
  color: black;
}
.hello {
  font-weight: 700;
  font-size: 2.5rem;
  background: -webkit-linear-gradient(
    120deg,
    rgba(135, 204, 254, 0.93),
    rgb(12, 104, 237, 1)
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
}
.sign {
  line-height: 0;
  font-size: 1.2rem;
}
</style>

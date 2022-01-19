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
            action="">
            <InputField
              type="email"
              label="Email or Username"
              v-model="email"
              placeholder="johndoe@email.com" />
            <InputField
              type="password"
              label="Password"
              v-model="password"
              placeholder="password" />
            <div class="w-full text-right font-medium text-red-500">
              <a href="#">Forgot Password?</a>
            </div>
            <div
              class="w-max text-center p-[3px] rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
              <button
                @click.prevent="test"
                type="submit"
                class="bg-white px-16 py-1 font-semibold rounded-full">
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
              class-name="w-full  flex gap-x-3 px-[1.9rem] py-1 items-center bg-white rounded-lg"
              logo="google"
              btn-text="LOGIN WITH GOOGLE"
              alt="google"
              @clickAuth="googleLogIn" />
            <ButtonLogIn
              class-name="w-full flex gap-x-3 px-5 py-1 items-center bg-white rounded-lg"
              logo="facebook"
              btn-text="LOGIN WITH FACEBOOK"
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
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'firebase/auth'

const auth = getAuth()
export default {
  name: 'LoginPage',
  head() {
    return {
      title: '1 Bataan | Login',
    }
  },
  data() {
    return {
      email : '',
      password: '',
    }
  },
  methods: {
    googleLogIn() {
      const provider = new GoogleAuthProvider()
      signInWithPopup(auth, provider)
        .then((result) => {
          console.log(result)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    facebookLogIn() {
      const provider = new FacebookAuthProvider()
      signInWithPopup(auth, provider)
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

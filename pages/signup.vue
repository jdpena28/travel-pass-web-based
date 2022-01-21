<template>
  <section id="Sign-up" class="h-screen w-full bg-cover">
    <div class="container h-[90%] flex justify-center items-center mx-auto">
      <div
        id="card items-center"
        class="bg-white w-[35%] h-[65%] rounded-3xl shadow-lg">
        <div class="header">
          <h3 class="Create">Create a new account</h3>
          <p class="Continue.">To Continue</p>
        </div>
        <form class="w-full px-8 flex flex-col items-center gap-y-2" action="">
          <InputField
            v-model="email"
            type="email"
            label="Email or Username"
            placeholder="Example@email.com" />
          <InputField
            v-model="password"
            type="password"
            label="Password"
            placeholder="password" />
          <InputField
            v-model="password"
            type="password"
            label="Retype-Password"
            placeholder="Retype-password" />
          <div
            class="w-full cursor-pointer text-right font-medium text-red-500"></div>
          <div
            class="w-max text-center p-[3px] rounded-full bg-gradient-to-r from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
            <button
              class="bg-white px-16 py-1 font-semibold rounded-full"
              type="Create">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SignUp',
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

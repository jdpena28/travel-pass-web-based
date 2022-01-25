<template>
  <section id="Devpage" class="h-[110%] w-full bg-cover">
    <NavigationBar />
    <div
      class="flex absolute w-full justify-center bg-stone-900/50 mx-auto pt-20 pb-[27rem]">
      <h1 class="text-white font-bold text-3xl">MEET THE TEAM</h1>
    </div>
    <div class="container relative px-5 py-24 mx-auto">
      <div class="flex flex-wrap w-full mb-20"></div>
      <div class="flex flex-wrap -m-4">
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div
            class="bg-white bg-opacity-100 p-6 rounded-2xl border-solid border-2 border-black">
            <img
              class="h-100 rounded w-full object-cover object-center mb-6"
              src="~/assets/images/Johnhenrich.png"
              alt="Picture" />
            <h3
              class="tracking-widest text-center text-black-400 text-2xl font-extrabold title-font mb-5">
              John Henrich
            </h3>
            <p class="leading-relaxed text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              rutrum justo faucibus tellus fermentum, non vulputate quam euismo
            </p>
            <p
              class="leading-relaxed text-base font-extrabold text-center mt-6">
              Back-end | Project Manager
            </p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div
            class="bg-white bg-opacity-100 p-6 rounded-2xl border-solid border-2 border-black">
            <img
              class="h-100 rounded w-full object-cover object-center mb-6"
              src="~/assets/images/Rovic.png"
              alt="Picture" />
            <h3
              class="tracking-widest text-center text-black-400 text-2xl font-extrabold title-font mb-5">
              Rovic Troy
            </h3>
            <p class="leading-relaxed text-base text-center">
              “Your time is limited, so don’t waste it living someone else’s
              life. Don’t be trapped by dogma – which is living with the results
              of other people’s thinking.” – Steve Jobs
            </p>
            <p
              class="leading-relaxed text-base font-extrabold text-center mt-6">
              Front-end | UI Designer
            </p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div
            class="bg-white bg-opacity-100 p-6 rounded-2xl border-solid border-2 border-black">
            <img
              class="h-100 rounded w-full object-cover object-center mb-6"
              src="~/assets/images/Jefte.png"
              alt="Picture" />
            <h3
              class="tracking-widest text-center text-black-400 text-2xl font-extrabold title-font mb-5">
              Jefte
            </h3>
            <p class="leading-relaxed text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              rutrum justo faucibus tellus fermentum, non vulputate quam euismo
            </p>
            <p
              class="leading-relaxed text-base font-extrabold text-center mt-6">
              Front-end Developer
            </p>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div
            class="bg-white bg-opacity-100 p-6 rounded-2xl border-solid border-2 border-black">
            <img
              class="h-100 rounded w-full object-cover object-center mb-6"
              src="~/assets/images/Vien.png"
              alt="Picture" />
            <h3
              class="tracking-widest text-center text-black-400 text-2xl font-extrabold title-font mb-5">
              Francis Vien
            </h3>
            <p class="leading-relaxed text-base text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              rutrum justo faucibus tellus fermentum, non vulputate quam euismo
            </p>
            <p
              class="leading-relaxed text-base font-extrabold text-center mt-6">
              UI Designer | DOC Specialist
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section></section>
</template>

<script>
export default {
  name: 'DevPage',
}
</script>

<style>
#Devpage {
  background-image: url('~assets/images/dev-background.png');
}
</style>

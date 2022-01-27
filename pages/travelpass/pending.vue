<template>
  <section id="waiting-page" class="h-screen w-full bg-cover">
    
    <div class="container flex-col mx-auto">
      <div class="flex justify-center items-center bg-blue-600 p-12 mx-auto">
      <h1 class="text-3xl font-bold text-white">Pending Approval</h1>
    </div>
      <img
        class="h-max w-[20rem] inset-0 mx-auto mt-8"
        src="~/assets/images/hourglass-icon.png"
        alt="Hourglass"
        height="250px"
        width="250px" />
      <div class="flex-col text-center mx-2 my-14">
        <p class="text-gray-500/60 text-xl font-medium">
          We're currently processing your request as of this moment.
        </p>
        <br />
        <p class="text-gray-500/60 text-xl font-medium">Thank you.</p>
      </div>
    </div>
    <div class="flex justify-center">
      <button
        class="bg-blue-700 hover:bg-blue-500 text-white text-lg font-bold px-8 py-2 rounded-full">
        Exit Page
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PendingPage',
}
</script>

<style></style>

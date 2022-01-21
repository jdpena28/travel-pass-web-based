<template>
  <section id="info-board" class="h-screen w-full bg-cover">
    <NavigationBar />
    <div class="container mx-auto">
      <!--insert your code here-->
      <div class="infoheader">
        <h1 class="Upd">
          PHILIPPINES COVID-19 <span style="color: red">UPDATE</span>
        </h1>
      </div>
      <div class="flex justify-center items-center w-full h-[80%]">
        <div class="grid h-[90%] w-[50%] mx-2 my-2">
          <div
            class="flex flex-col justify-center items-center col-span-2 h-[90%] w-[90%] mx-auto my-4 space-y-4">
            <p class="font-bold text-3xl">ACTIVE CASES</p>
            <p class="font-bold text-6xl">2,031,767</p>
            <p class="font-normal text-xs pt-4">Currently Infected Patients</p>
          </div>
          <div
            class="flex flex-col justify-center items-center h-[50%] w-[90%] ml-8 mb-4">
            <p class="text-3xl font-bold text-sky-500">276</p>
            <p class="text-xl font-bold text-sky-500">CONFIRMED CASES</p>
          </div>
          <div
            class="flex flex-col justify-center items-center h-[50%] w-[90%] mb-4">
            <p class="text-3xl font-bold text-rose-500">4</p>
            <p class="text-xl font-bold text-rose-500">CONFIRMED DEATH</p>
          </div>
        </div>
        <div class="grid h-[90%] w-[50%] mr-2 my-2">
          <div
            class="flex flex-col justify-center items-center col-span-2 h-[90%] w-[90%] mx-auto my-4 space-y-4">
            <p class="font-bold text-3xl">RECOVERED CASES</p>
            <p class="font-bold text-6xl">1,277,767</p>
            <p class="font-normal text-xs pt-4">Cases which had an outcome</p>
          </div>
          <div
            class="flex flex-col justify-center items-center h-[50%] w-[90%] ml-8 mb-4">
            <p class="text-3xl font-bold text-green-500">8</p>
            <p class="text-xl font-bold text-green-500">RECOVERED</p>
          </div>
          <div
            class="flex flex-col justify-center items-center h-[50%] w-[90%] mb-4">
            <p class="text-3xl font-bold text-sky-500">171</p>
            <p class="text-xl font-bold text-sky-500">PENDING</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'InformationBoard',
}
</script>
<style scoped>
.infoheader {
  margin-top: 4.4rem;
  color: black;
  margin-bottom: 2.3rem;
}
.Upd {
  text-align: center;
  font-weight: 700;
  font-size: 4.1rem;
  color: rgba(12, 104, 237, 1);
}
</style>

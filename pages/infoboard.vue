<template>
  <section id="info-board" class="h-screen w-full bg-cover">
    <NavigationBar />
    <div class="container mx-auto">
      <!--insert your code here-->
      <div class="infoheader">
        <h1 class="Upd">
          PHILIPPINES COVID-19 <span class="text-red-400">UPDATE</span>
        </h1>
        <p>NOTE: No available data between 1:00PM - 6:00PM</p>
        <p>
          Updated:
          {{ Date(res.updated).toLocaleString('en-US', { hour12: true }) }}
        </p>
      </div>
      <div class="flex justify-center items-center w-full h-[80%]">
        <div class="grid gap-y-3 h-[90%] w-[50%] mx-2 my-2">
          <div
            class="flex flex-col justify-center items-center col-span-2 h-[90%] w-[90%] mx-auto my-4 space-y-4">
            <p class="font-bold text-3xl">TODAY CASES</p>
            <p class="font-bold text-6xl">
              {{ res.todayCases.toLocaleString() }}
            </p>
            <p class="font-normal text-xs pt-4">Currently Infected Patients</p>
          </div>
          <div
            class="flex flex-col justify-center items-center h-[50%] w-[90%] ml-8 mb-4">
            <p class="text-3xl font-bold text-sky-500">
              {{ res.todayDeaths.toLocaleString() }}
            </p>
            <p class="text-xl font-bold text-sky-500">DEATHS</p>
          </div>
          <div
            class="flex flex-col justify-center items-center h-[50%] w-[90%] mb-4">
            <p class="text-3xl font-bold text-rose-500">
              {{ res.todayRecovered.toLocaleString() }}
            </p>
            <p class="text-xl font-bold text-rose-500">RECOVERED</p>
          </div>
        </div>
        <div class="grid gap-y-3 h-[90%] w-[50%] mr-2 my-2">
          <div
            class="flex flex-col justify-center items-center col-span-2 h-[90%] w-[90%] mx-auto my-4 space-y-4">
            <p class="font-bold text-3xl">TOTAL CASES</p>
            <p class="font-bold text-6xl">{{ res.cases.toLocaleString() }}</p>
            <p class="font-normal text-xs pt-4">Cases which had an outcome</p>
          </div>
          <div
            class="flex flex-col justify-center items-center h-[50%] w-[90%] ml-8 mb-4">
            <p class="text-3xl font-bold text-green-500">
              {{ res.recovered.toLocaleString() }}
            </p>
            <p class="text-xl font-bold text-green-500">RECOVERED</p>
          </div>
          <div
            class="flex flex-col justify-center items-center h-[50%] w-[90%] mb-4">
            <p class="text-3xl font-bold text-sky-500">
              {{ res.tests.toLocaleString() }}
            </p>
            <p class="text-xl font-bold text-sky-500">TESTS</p>
          </div>
        </div>
      </div>
    </div>
    <p></p>
  </section>
</template>
<script>
export default {
  name: 'InformationBoard',
  async asyncData({ $axios }) {
    const data = await $axios.get(
      'https://disease.sh/v3/covid-19/countries/philippines?strict=true'
    )
    const res = data.data
    return {
      res,
    }
  },
  head() {
    return {
      title: '1 Bataan | Info-Board',
    }
  },
}
</script>
<style scoped>
.infoheader {
  margin-top: 4.2rem;
  color: black;
  margin-bottom: 2rem;
  text-align: center;
}
.Upd {
  text-align: center;
  font-weight: 700;
  font-size: 4.1rem;
  color: rgba(12, 104, 237, 1);
}
#info-board {
  background-image: url('~assets/images/covid-board-background.jpg');
}
</style>

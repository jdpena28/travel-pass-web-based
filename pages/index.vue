<template>
   <section
      id="landing-page"
      class="h-screen w-full bg-cover">
      
      <NavigationBar/>
      <div class="container mx-auto">
        <!--insert your code here-->
        <div class="mt-12 space-y-2 ">
          <h1 class="text-blue-800 font-bold text-4xl">1 Bataan</h1>
          <h1 class="text-blue-800 font-medium text-4xl">Travel Pass System</h1>
          <p class="w-96 text-left leading-7 text-lg pr-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla
          </p>
         <nuxt-link to="/login">
            <button
              class="bg-lime-400 text-white text-xl font-bold py-4 px-12 rounded-full">
              Get Pass
            </button>
         </nuxt-link>
        </div>
      </div>
    </section>
</template>
<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: '1 Bataan | Get Pass'
    }
  }
}
</script>
<style>
body {
    font-family: 'Poppins', sans-serif;
}

#landing-page {
   background-image: url('~assets/images/road.png')
}
</style>

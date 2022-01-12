<template>
   <section
      id="landing-page"
      class="h-screen w-full bg-cover">
      <div class="container mx-auto">
        <!--insert your code here-->
        <nav>
          <a class="px-4 py-2 transition ease-in-out delay-150 hover:bg-orange-400 duration-500 rounded-xl" href="">Home</a>
          <a class="px-4 py-2 transition ease-in-out delay-150 hover:bg-orange-400 duration-500 rounded-xl" href="">Get-Pass</a>
          <a class="px-4 py-2 transition ease-in-out delay-150 hover:bg-orange-400 duration-500 rounded-xl" href="">FAQ</a>
          <a class="px-4 py-2 transition ease-in-out delay-150 hover:bg-orange-400 duration-500 rounded-xl" href="">About</a>  
         </nav>
        <div class="space-y-2">
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
nav{
    font-size: 1.4rem;
    position: sticky;
    font-weight: 600;
    text-align: right;
    padding: 1.2rem;
    word-spacing: 4rem;
}
#landing-page {
   background-image: url('~assets/images/road.png')
}
</style>

<template>
     <nav class="sticky top-0 z-50 backdrop-filter backdrop-blur-sm bg-opacity-50 shadow">
          <nuxt-link to="/">
               <a class="px-4 py-2 transition ease-in-out delay-150 hover:bg-orange-400 duration-300 rounded-xl" href="">Home</a>
          </nuxt-link>
          <nuxt-link to="/login">
               <a class="px-4 py-2 transition ease-in-out delay-150 hover:bg-orange-400 duration-300 rounded-xl" href="">Get-Pass</a>
          </nuxt-link>  
          <nuxt-link to="/infoboard">
               <a class="px-4 py-2 transition ease-in-out delay-150 hover:bg-orange-400 duration-300 rounded-xl" href="">Info-Board</a>
          </nuxt-link> 
          <nuxt-link to="/about">
               <a class="px-4 py-2 transition ease-in-out delay-150 hover:bg-orange-400 duration-300 rounded-xl" href="">About</a>
          </nuxt-link>             
     </nav>
</template>

<script>
export default {
 name: 'NavigationBar',
    href: {
      type: String,
      default: ""
    },
}
</script>
<style scoped>
nav{
    font-size: 1.4rem;
    position: sticky;
    font-weight: 600;
    text-align: right;
    padding: 1.2rem;
    word-spacing: 4rem;
}
</style>
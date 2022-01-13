<template>
  <nav class="backdrop-filter backdrop-blur-sm bg-opacity-50 shadow">
          <a class="px-4 py-2 transition ease-in-out delay-150 hover:bg-orange-400 duration-300 rounded-xl" href="">Home</a>
          <a class="px-4 py-2 transition ease-in-out delay-150 hover:bg-orange-400 duration-300 rounded-xl" href="">Get-Pass</a>
          <a class="px-4 py-2 transition ease-in-out delay-150 hover:bg-orange-400 duration-300 rounded-xl" href="">FAQ</a>
          <a class="px-4 py-2 transition ease-in-out delay-150 hover:bg-orange-400 duration-300 rounded-xl" href="">About</a>  
   </nav>
</template>

<script>
export default {
 name: 'NavigationBar',
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
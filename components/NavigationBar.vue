<template>
  <nav
    class="sticky top-0 z-50 backdrop-filter backdrop-blur-sm bg-opacity-50 shadow">
    <NuxtLink to="/">
      <span
        class="p-2 transition ease-in-out delay-150 hover:bg-orange-400 duration-300 rounded-xl"
        >Home</span
      >
    </NuxtLink>
    <NuxtLink to="/login">
      <span
        class="p-2 transition ease-in-out delay-150 hover:bg-orange-400 duration-300 rounded-xl"
        >Get-Pass</span
      >
    </NuxtLink>
    <NuxtLink to="/infoboard">
      <span
        class="p-2 transition ease-in-out delay-150 hover:bg-orange-400 duration-300 rounded-xl"
        >Info-Board</span
      >
    </NuxtLink>
    <NuxtLink to="/devpage">
      <span
        class="p-2 transition ease-in-out delay-150 hover:bg-orange-400 duration-300 rounded-xl"
        >About</span
      >
    </NuxtLink>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  href: {
    type: String,
    default: '',
  },
}
</script>
<style scoped>
nav {
  font-size: 1.4rem;
  position: sticky;
  font-weight: 600;
  text-align: right;
  padding: 1.2rem;
  word-spacing: 4rem;
}
</style>

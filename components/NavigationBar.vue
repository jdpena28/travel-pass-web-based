<template>
  <nav
    class="sticky top-0 z-50 backdrop-filter backdrop-blur-sm bg-opacity-50 shadow">
    <NuxtLink to="/">
      <a
        class="p-2 transition ease-in-out delay-150 hover:bg-orange-400 duration-300 rounded-xl"
        href=""
        >Home</a
      >
    </NuxtLink>
    <NuxtLink to="/login">
      <a
        class="p-2 transition ease-in-out delay-150 hover:bg-orange-400 duration-300 rounded-xl"
        href=""
        >Get-Pass</a
      >
    </NuxtLink>
    <NuxtLink to="/infoboard">
      <a
        class="p-2 transition ease-in-out delay-150 hover:bg-orange-400 duration-300 rounded-xl"
        href=""
        >Info-Board</a
      >
    </NuxtLink>
    <NuxtLink to="/about">
      <a
        class="p-2 transition ease-in-out delay-150 hover:bg-orange-400 duration-300 rounded-xl"
        href=""
        >About</a
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

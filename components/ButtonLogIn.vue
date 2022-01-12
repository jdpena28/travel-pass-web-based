<template>
  <div
    class="w-max rounded-xl p-[3px] bg-gradient-to-r from-blue-600 to-violet-600">
    <div :class="className">
      <img
        :src="require(`~/assets/images/logo/${logo}.svg`)"
        :alt="alt"
        height="24px"
        width="24px"
      />
      <p class="font-bold">{{btnText}}</p>
    </div>
  </div>
</template>
<script>
export default {
    name: "ButtonLogIn",
    props:[
        "btnText",
        "logo",
        "alt",
        "className",
    ]
}
</script>
<style lang=""></style>

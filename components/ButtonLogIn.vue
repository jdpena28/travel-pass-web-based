<template>
  <div
    class="w-max rounded-xl cursor-pointer p-[3px] bg-gradient-to-r from-blue-400 to-violet-600"
    @click="clickme">
    <div :class="className">
      <img
        :src="require(`~/assets/images/logo/${logo}.svg`)"
        :alt="alt"
        height="24px"
        width="24px" />
      <p class="font-bold text-black">{{ btnText }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ButtonLogIn',
  props: ['btnText', 'logo', 'alt', 'className', 'clickAuth'],
  methods: {
    clickme() {
      this.$emit('clickAuth')
    },
  },
}
</script>
<style lang=""></style>

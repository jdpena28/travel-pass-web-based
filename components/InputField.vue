<template>
  <label class="w-full font-semibold text-lg" :for="type">
    {{ label }}<br />
    <div
      class="rounded-full bg-gradient-to-r p-[2px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
      <input
        class="border-2 rounded-full pl-2 w-full outline-none"
        :type="type"
        :name="type"
        :placeholder="placeholder"
        required />
    </div>
  </label>
</template>
<script>
export default {
  name: 'InputField',
  props: {
    type: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
  },
}
</script>
<style lang=""></style>

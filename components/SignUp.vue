<template>
  <label
    class="w-full font-semibold text-sm text-cyan-500 p-4"
    :for="labelForSignUp">
    {{ labelForSignUp }}<br />
    <input
      class="rounded pl-2 text-black text-lg bg-gray-50 w-full outline-none mb-[4px]"
      :type="type"
      :name="labelForSignUp"
      :placeholder="placeholder"
      required />
    <div
      class="rounded bg-gradient-to-r pb-[3px] from-[#e05252] via-[#6588df] to-[#15EEFC] mb-1"></div>
  </label>
</template>

<script>
export default {
  name: 'SignUp',
  props: {
    type: {
      type: String,
      required: true,
    },
    labelForSignUp: {
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

<style></style>

<template>
  <label class="w-full font-semibold text-sm text-cyan-500 p-4" :for="type">
    {{ label }}<br />
    <div
      class="rounded bg-gradient-to-r pb-[2px] from-[#e05252] via-[#6588df] to-[#15EEFC]">
      <input
        class="rounded pl-2 text-black text-lg bg-gray-50 w-full outline-none mb-[1px] p-1"
        :type="type"
        :name="type"
        :placeholder="placeholder"
        required />
    </div>
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

<style>

</style>
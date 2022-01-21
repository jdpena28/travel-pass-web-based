<template>
  <label class="w-full font-semibold text-lg" :for="type">
    {{ label }}<br />
    <div
      class="rounded-full bg-gradient-to-r p-[2px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
      <input
        class="border-2 rounded-full pl-2 w-full outline-none"
        :type="type"
        :name="type"
        :value="value"
        :placeholder="placeholder"
        required
        @input="$emit('input', $event.target.value)" />
    </div>
  </label>
</template>
<script>
export default {
  name: 'InputField',
  props: ['type', 'label', 'placeholder', 'value'],
}
</script>
<style lang=""></style>

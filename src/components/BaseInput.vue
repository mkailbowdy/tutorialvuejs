<script setup>
defineProps({
  label: {
    type: String,
    default: '',
    required: true,
  },
  modelValue: {
    // Accept Strings or Numbers using array syntax
    type: [String, Number],
    default: '',
  },
})
</script>

<template>
  <label>{{ label }}</label>
  <input
    v-bind="$attrs"
    :placeholder="label"
    class="field"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>
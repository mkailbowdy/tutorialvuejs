<script setup>
import UniqueID from '@/features/UniqueID';
defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number],
    default: '',
  },
  value: {
    type: [String, Number],
    required: true,
  },
})
const uuid = UniqueID().getID()
</script>

<template>
  <input
    type="radio"
    :checked="modelValue === value"
    :value="value"
    v-bind="$attrs"
    @change="$emit('update:modelValue', value)"
    :id="uuid"
  />
  <label v-if="label" :for="uuid">{{ label }}</label>
</template>

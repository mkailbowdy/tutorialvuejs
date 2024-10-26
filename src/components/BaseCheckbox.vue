<script setup>
import UniqueID from '@/features/UniqueID';
defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [Boolean],
    default: false,
  },
})

const uuid = UniqueID().getID();
</script>
<template>
  <input
    type="checkbox"
    class="field"
    :checked="modelValue"
    @change="$emit('update:modelValue', $event.target.checked)"
    :id="uuid"
  />
  <label v-if="label" :for="uuid">{{ label }}</label>
</template>

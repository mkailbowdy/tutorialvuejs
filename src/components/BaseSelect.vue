<script setup>
import UniqueID from '@/features/UniqueID'
defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    // Accept Strings or Numbers using array syntax
    type: [String, Number],
    default: '',
  },
  options: {
    type: Array,
    required: true,
  },
})

const uuid = UniqueID().getID()
</script>
<template>
  <label v-if="label" :for="uuid">{{ label }}</label>
  <select
    :value="modelValue"
    class="field"
    v-bind="{
      ...$attrs,
      onChange: ($event) => {
        $emit('update:modelValue', $event.target.value)
      },
    }"
    :id="uuid"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >
      {{ option }}
    </option>
  </select>
</template>

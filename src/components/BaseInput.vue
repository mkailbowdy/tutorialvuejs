<script setup>
import UniqueID from '@/features/UniqueID'

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
  error: {
    type: String,
    default: '',
  },
})

const uuid = UniqueID().getID()
</script>

<template>
  <label :for="uuid">{{ label }}</label>
  <input
    v-bind="$attrs"
    :placeholder="label"
    class="field"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :id="uuid"
    :aria-describedby="error ? `${uuid}-error` : null"
    :aria-invalid="error ? true : null"
  />
  <p
    v-if="error"
    class="errorMessage"
    :id="`${uuid}-error`"
    aria-live="assertive"
  >
    {{ error }}
  </p>
</template>

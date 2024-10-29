<script setup>
import { useRouter } from 'vue-router'
import { inject } from 'vue'

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
})

const router = useRouter()
const GStore = inject('GStore')

const register = () => {
  // If registration successful, flash a message, and then push back to event's detail page
  GStore.flashMessage = 'You successfully registered for ' + props.event.title
  setTimeout(() => {
    GStore.flashMessage = ''
  }, 3000)
  router.push({
    name: 'event-details',
    id: props.event.id,
  })
}
</script>

<template>
  <p>Register for this event</p>
  <button @click="register">Register me!</button>
</template>

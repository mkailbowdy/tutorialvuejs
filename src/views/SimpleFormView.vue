<script setup>
import { ref } from 'vue'
import BaseInput from '@/components/BaseInput.vue'
import BaseSelect from '@/components/BaseSelect.vue'
import BaseCheckbox from '@/components/BaseCheckbox.vue'
import BaseRadioGroup from '@/components/BaseRadioGroup.vue'
import axios from 'axios'

const categories = [
  'sustainability',
  'nature',
  'animal welfare',
  'housing',
  'education',
  'food',
  'community',
]

const event = ref({
  category: '',
  title: '',
  description: '',
  location: '',
  pets: 0,
  extras: {
    catering: false,
    music: false,
  },
})

const petOptions = ref([
  { label: 'Yes', value: '1' },
  { label: 'No', value: '0' },
])

function sendForm() {
  axios
    .post(
      'https://my-json-server.typicode.com/Code-Pop/Vue-3-Forms/events',
      event.value
    )
    .then(function (response) {
      console.log('Response', response)
    })
    .catch(function (err) {
      console.log('Error', err)
    })
}
</script>

<template>
  <div>
    <h1>Create an event</h1>
    <form @submit.prevent="sendForm">
      <BaseSelect
        :options="categories"
        label="Choose a category"
        v-model="event.category"
      />

      <h3>Name & describe your event</h3>

      <BaseInput v-model="event.title" label="Title" type="text" />
      <BaseInput v-model="event.description" label="Description" type="text" />

      <h3>Where is your event?</h3>

      <BaseInput v-model="event.location" label="Location" type="text" />

      <h3>Are pets allowed?</h3>
      <div>
        <BaseRadioGroup
          v-model="event.pets"
          name="pets"
          :options="petOptions"
          vertical
        />
      </div>

      <h3>Extras</h3>
      <div>
        <BaseCheckbox v-model="event.extras.catering" label="Catering" />
      </div>
      <div>
        <BaseCheckbox v-model="event.extras.music" label="Music" />
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

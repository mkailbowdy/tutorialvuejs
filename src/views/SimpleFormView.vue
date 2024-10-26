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

      <fieldset>
        <legend>Name & describe your event</legend>

        <BaseInput v-model="event.title" label="Title" type="text" error="This has an error!"/>
        <BaseInput
          v-model="event.description"
          label="Description"
          type="text"
        />
      </fieldset>

      <fieldset>
        <legend>Where is your event?</legend>

        <BaseInput v-model="event.location" label="Location" type="text" />
      </fieldset>

      <fieldset>
        <legend>Pets</legend>
        <p>Are pets allowed?</p>
        <div>
          <BaseRadioGroup
            v-model="event.pets"
            name="pets"
            :options="petOptions"
            vertical
          />
        </div>
      </fieldset>

      <fieldset>
        <legend>Extras</legend>
        <div>
          <BaseCheckbox v-model="event.extras.catering" label="Catering" />
        </div>
        <div>
          <BaseCheckbox v-model="event.extras.music" label="Music" />
        </div>
      </fieldset>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style>
fieldset {
  border: 0;
  margin: 0;
  padding: 0;
}

legend {
  font-size: 28px;
  font-weight: 700;
  margin-top: 20px;
}
</style>

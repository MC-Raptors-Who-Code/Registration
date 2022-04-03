<template>
  <!-- TODO: adjust grid for different screen sizes -->
  <!-- TODO: split into sub-components -->
  <form class="grid grid-cols-2 p-10 gap-10">
    <label class="block">
      <span class="block text-sm font-medium text-neutral-700">Full Name {{name}}</span>
      <input
        type="text" 
        v-model= "name"
        placeholder="Your Answer"
        class="mt-1 block w-full px-3 py-2 bg-white border border-neutral-300 rounded-lg text-sm placeholder-neutral-400 focus:outline-none focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
      />
    </label>
    <label class="block">
      <span class="block text-sm font-medium text-neutral-700">Major</span>
      <!-- TODO: make this a dropdown select -->
      <input
        type="text"
        placeholder="Your Answer"
        class="mt-1 block w-full px-3 py-2 bg-white border border-neutral-300 rounded-lg text-sm placeholder-neutral-400 focus:outline-none focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
      />
    </label>
    <label class="block col-span-2">
      <span class="block text-sm font-medium text-neutral-700">How many credits have you completed?</span>
      <radiogroup class="w-full mt-1 grid grid-flow-col auto-cols-max gap-4">
        <!-- TODO: highlight on select -->
        <label
          v-for="i in ['0 - 15', '15 - 30', '30 - 45', '45 - 60']"
          :key="i"
          class="block w-full px-3 py-2 bg-white border border-neutral-300 rounded-lg text-sm placeholder-neutral-400 hover:border-purple-700 hover:ring-1 hover:ring-purple-700"
        >
          <input type="radio" name="Option" :value="'Option ' + i" />
          {{ i }}
        </label>
      </radiogroup>
    </label>
    <label class="block">
      <span class="block text-sm font-medium text-neutral-700">GitHub username (optional) </span>
      <input
        type="text"
        placeholder="Your Answer"
        class="mt-1 block w-full px-3 py-2 bg-white border border-neutral-300 rounded-lg text-sm placeholder-neutral-400 focus:outline-none focus:border-purple-700 focus:ring-1 focus:ring-purple-700"
      />
    </label>
    <label for="about" class="block col-span-2">
      <span class="block text-sm font-medium text-neutral-700">About You</span>
      <textarea
        id="about"
        name="about"
        rows="3"
        class="mt-1 p-4 focus:outline-none focus:ring-purple-700 focus:border-purple-700 block w-full sm:text-sm border border-neutral-300 rounded-lg"
        placeholder="A brief introduction about yourself"
      />
    </label>
    <div class="col-span-full text-right">
      <button
        type="submit"
        class="inline-flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-800"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script setup> 
import { ref } from 'vue'
const name = ref(0)
const credits = ref(1)
</script>

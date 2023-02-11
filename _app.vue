<template>
  <div>
    <a href="#" @click="view('home')">Home</a>
    <a href="#" @click="view('about')">About</a>
    <Home v-if="page === 'home'" />
    <About v-if="page === 'about'" />
  </div>
</template>

<script setup>
const page = ref('home')

function view(page_value) {
  page.value = page_value
}

</script>

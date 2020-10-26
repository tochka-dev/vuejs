<template>
  <div id="app">
    <header>
      <div class="logo">
        <img src="./assets/logo.png" alt="">
      </div>
      <search></search>
    </header>
    <main>
      <results></results>
    </main>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import Results from './components/Results.vue'

export default {
  name: 'app',
  components: { Search, Results }
}
</script>

<style src="./assets/style.css"></style>
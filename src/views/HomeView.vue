<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <main class="container">
    <h1>Hello There! 👋</h1>
    <p class="instructions">
      Let's buy some insurance. It is going to take only a few steps.
    </p>
    <RouterLink class="button button-primary" to="/about">Start</RouterLink>
  </main>
</template>

<style scoped>
.instructions {
  margin: 5px 0 20px;
}
</style>

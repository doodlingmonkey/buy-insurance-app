<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router';

import { useFormStore } from './../stores/form';

const router = useRouter();
const form = useFormStore();

// ENHANCEMENT: Move to router guard
if (!form.age || !form.selectedCountry || !form.selectedPlan) {
  router.push('/about');
}

const handleOkClick = () => {
  form.$reset();
  router.push('/');
};
</script>

<template>
  <main class="container">
    <h1>Ooops 😢</h1>
    <p class="instructions">
      Your age is over our accepted limit.<br />We are sorry but we cannot
      insure you now.
    </p>
    <a
      class="button button-primary"
      href="javascript:void(0)"
      @click="handleOkClick"
    >
      Ok
    </a>
  </main>
</template>

<style scoped>
.instructions {
  margin: 5px 0 20px;
  text-align: center;
}
</style>

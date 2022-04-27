<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

import { calculateTotalPremium } from './../logic/premium-calculator';
import { useFormStore } from './../stores/form';

const router = useRouter();
const form = useFormStore();

// ENHANCEMENT: Move to router guard
if (!form.age || !form.selectedCountry || !form.selectedPlan) {
  router.push('/about');
}

const totalPremiumDisplay = computed(() => {
  if (!form.age || !form.selectedCountry || !form.selectedPlan) return '';

  const totalPremium = calculateTotalPremium(
    form.age,
    form.selectedCountry.rate,
    form.selectedPlan.percentageOfAdditionalPayment
  );

  return `${totalPremium.toLocaleString()}${form.selectedCountry?.currency}`;
});
</script>

<template>
  <main class="container">
    <h1>Summary 📝</h1>
    <div class="summary">
      <label> <span class="strong">Name:</span> {{ form.name }} </label>
      <label> <span class="strong">Age: </span>{{ form.age }}</label>
      <label>
        <span class="strong">Where do you live: </span
        >{{ form.selectedCountry?.name }}
      </label>
      <label>
        <span class="strong">Package: </span>{{ form.selectedPlan?.name }}
      </label>
      <label>
        <span class="strong">Premium: </span>{{ totalPremiumDisplay }}
      </label>
    </div>

    <div class="navigation">
      <RouterLink class="button button-secondary" to="/about">Back</RouterLink>
      <RouterLink class="button button-primary" to="/">Buy</RouterLink>
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.summary {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.strong {
  font-weight: 600;
}
</style>

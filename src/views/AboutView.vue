<script setup lang="ts">
import { computed } from 'vue';
import { RouterLink, useRouter } from 'vue-router';

import {
  calculateAdditionalPayment,
  calculateTotalPremium,
} from './../logic/premium-calculator';
import countries from './../datas/countries';
import plans from './../datas/plans';
import { useFormStore } from './../stores/form';

const router = useRouter();
const form = useFormStore();

const filledUpTheCalculableInfo = computed(() => {
  return form.age && form.selectedCountry;
});

const additionalPaymentDisplay = (percentageOfAdditionalPayment: number) => {
  if (!form.age || !form.selectedCountry) return '';

  const additionalPayment = calculateAdditionalPayment(
    form.age,
    form.selectedCountry.rate,
    percentageOfAdditionalPayment
  );
  return `+${additionalPayment.toLocaleString()}${
    form.selectedCountry?.currency
  }`;
};

const totalPremiumDisplay = computed(() => {
  if (!form.age || !form.selectedCountry || !form.selectedPlan) return '';

  const totalPremium = calculateTotalPremium(
    form.age,
    form.selectedCountry.rate,
    form.selectedPlan.percentageOfAdditionalPayment
  );

  return `${totalPremium.toLocaleString()}${form.selectedCountry?.currency}`;
});

const next = () => {
  if (!form.name || !filledUpTheCalculableInfo.value) {
    alert('Please fill up all of the information.');
    return;
  }

  router.push('/summary');
};
</script>

<template>
  <main class="container">
    <h1>Tell us about yourself 🤔</h1>
    <div class="fields">
      <label class="label">
        Name
        <input type="text" v-model="form.name" />
      </label>

      <label class="label">
        Age

        <input type="number" min="1" v-model="form.age" />
      </label>

      <label class="label">
        Where do you live

        <select v-model="form.selectedCountry">
          <option
            v-for="country in countries"
            v-bind:key="country.name"
            :value="country"
          >
            {{ country.name }}
          </option>
        </select>
      </label>

      <div v-if="filledUpTheCalculableInfo" class="package-options">
        <label v-for="plan in plans" v-bind:key="plan.name" class="radio">
          <input type="radio" v-model="form.selectedPlan" v-bind:value="plan" />
          &nbsp;{{ plan.name }}&nbsp;
          <span v-if="plan.percentageOfAdditionalPayment">
            ({{ additionalPaymentDisplay(plan.percentageOfAdditionalPayment) }},
            {{ plan.percentageOfAdditionalPayment }}%)
          </span>
        </label>
      </div>
    </div>

    <h2 v-if="filledUpTheCalculableInfo" class="premium-amount">
      Your premium is: {{ totalPremiumDisplay }}
    </h2>

    <div class="navigation">
      <RouterLink class="button button-secondary" to="/">Back</RouterLink>
      <a class="button button-primary" href="javascript:void(0)" @click="next">
        Next
      </a>
    </div>
  </main>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fields {
  width: 250px;
  display: flex;
  flex-direction: column;
}

.fields input[type='text'],
.fields input[type='number'] {
  width: 100%;
  padding: 6px 5px;
}

.fields select {
  width: 100%;
  padding: 6.25px 5px;
}

.package-options {
  margin-top: 5px;
}

.premium-amount {
  margin: 20px 0 0;
}
</style>

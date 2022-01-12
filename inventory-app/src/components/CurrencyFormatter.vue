<template>
  <div>
    <span v-if="!withSymbol"> {{ amount }}</span>
    <span v-else> {{ amountWithSymbol }}</span>
  </div>
</template>

<script setup>
import { computed } from "vue";
import Dinero from "dinero.js";
const props = defineProps({
  amount: Number,
  withSymbol: {
    type: Boolean,
    default: false,
  },
});
const amountWithSymbol = computed(() =>
  Dinero({ amount: props.amount, currency: "PHP", precision: 0 }).toFormat(
    "$0,0.00"
  )
);
const amount = computed(() =>
  Dinero({ amount: props.amount, precision: 0 }).toFormat("0,0.00")
);
</script>

<style></style>

<template>
  <div v-if="data">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Cost (Per Unit)</th>
          <th scope="col">Total Cost</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody v-if="data.length != 0">
        <tr v-for="(purchase, index) in data" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ productName(purchase.ProductId) }}</td>
          <td>{{ purchase.quantity }}</td>
          <td>
            <currency-formatter :amount="purchase.unitCost" />
          </td>
          <td>
            <currency-formatter :amount="totalCost(purchase)" />
          </td>
          <td><date-formatter :date="purchase.date" /></td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <th scope="row" colspan="2">Not Found</th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import CurrencyFormatter from "./CurrencyFormatter.vue";
import DateFormatter from "./DateFormatter.vue";

defineProps({
  data: {
    type: Array,
    required: true,
  },
});

const store = useStore();
store.dispatch("fetchProduct");
const productName = (id) => {
  let product = store.state.product;
  return product.filter((prod) => prod.id === id)[0].name;
};

const totalCost = (purchase) => purchase.unitCost * purchase.quantity;
</script>

<style></style>

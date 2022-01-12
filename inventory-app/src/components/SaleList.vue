<template>
  <div v-if="data">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price (Per Unit)</th>
          <th scope="col">Total Price</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(sale, index) in data" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ productName(sale.ProductId) }}</td>
          <td>{{ sale.quantity }}</td>
          <td>
            <currency-formatter :amount="sale.unitPrice" />
          </td>
          <td>
            <currency-formatter :amount="totalPrice(sale)" />
          </td>
          <td><date-formatter :date="sale.date" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import CurrencyFormatter from "./CurrencyFormatter.vue";
import { useStore } from "vuex";
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

const totalPrice = (sale) => sale.unitPrice * sale.quantity;
</script>

<style></style>

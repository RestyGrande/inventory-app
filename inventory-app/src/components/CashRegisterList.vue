<template>
  <div v-if="data">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price (Per Unit)</th>
          <th scope="col">Amount</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody v-if="data.length != 0">
        <tr v-for="(sale, index) in data" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ productName(sale.ProductId) }}</td>
          <td>{{ sale.quantity }}</td>
          <td>
            <currency-formatter :amount="sale.unitPrice" />
          </td>
          <td>
            <currency-formatter :amount="amount(sale)" />
          </td>
          <td><button @click="remove(index)">remove</button></td>
        </tr>
        <tr>
          <th colspan="4">Total Amount</th>
          <th><currency-formatter :amount="totalAmount" withSymbol /></th>
          <th><router-link :to="{ name: 'Receipt' }">Checkout</router-link></th>
        </tr>
      </tbody>

      <tbody v-else>
        <tr>
          <th scope="row" colspan="5" style="text-align: center">
            Next Customer
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import CurrencyFormatter from "./CurrencyFormatter.vue";
import { useStore } from "vuex";

defineProps({
  data: {
    type: Array,
    required: true,
  },
  totalAmount: {
    type: Number,
    required: true,
  },
});
const store = useStore();
store.dispatch("fetchProduct");
const productName = (id) => {
  let product = store.state.product;
  return product.filter((prod) => prod.id === id)[0].name;
};

const amount = (sale) => {
  console.log(sale);
  return sale.unitPrice * sale.quantity;
};
const emit = defineEmits("remove");
const remove = (id) => emit("remove", id);
</script>

<style scoped>
#total {
  text-align: right;
  border: 2px solid red;
}
</style>

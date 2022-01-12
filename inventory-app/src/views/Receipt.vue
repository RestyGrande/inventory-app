<template>
  <div>
    <h1>Receipt</h1>
    <div class="line"></div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th colspan="2">Date: <date-formatter :date="Date.now()" /></th>
          <th colspan="2">Receipt No: {{ receiptId }}</th>
        </tr>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Product Name</th>
          <th scope="col">Quantity</th>
          <th scope="col">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ productName(item.ProductId) }}</td>
          <td>{{ item.quantity }}</td>
          <td>
            <currency-formatter
              :amount="amount(item.unitPrice, item.quantity)"
            />
          </td>
        </tr>
        <tr>
          <th colspan="3">Total Amount :</th>
          <th>
            <currency-formatter :amount="totalAmount" withSymbol />
          </th>
        </tr>
        <tr>
          <button @click="save">Save</button>
          <button @click="$router.go(-1)">Back</button>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import DateFormatter from "../components/DateFormatter.vue";
import CurrencyFormatter from "../components/CurrencyFormatter.vue";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
const data = computed(() => store.state.order);
const receiptId = computed(
  () => `receipt-${Date.now()}-${Math.floor(Math.random() * 1000)}`
);
const totalAmount = computed(() => {
  let result = 0;
  if (data.value != 0) {
    result = data.value
      .map((sale) => {
        const quantity = sale.quantity;
        const price = sale.unitPrice;
        const amount = price * quantity;
        return amount;
      })
      .reduce((x, y) => x + y);
  }
  return result;
});

const amount = (price, quantity) => {
  return price * quantity;
};
const productName = (id) => {
  let product = store.state.product;
  return product.filter((prod) => prod.id === id)[0].name;
};
const save = async () => {
  try {
    await store.dispatch("addSale", data.value);
    store.dispatch("resetOrder");
    router.push({ name: "CashRegister" });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style></style>

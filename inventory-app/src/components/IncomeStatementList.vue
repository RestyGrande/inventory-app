<template>
  <div>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Income Statement</th>
          <th scope="col">Date</th>
          <th scope="col">
            <form @submit.prevent="send">
              <label for="dateFrom">
                From
                <input type="date" name="" id="" v-model="dateFrom" />
              </label>
              <label for="dateTo">
                To
                <input type="date" name="" id="" v-model="dateTo" />
              </label>
              <button>Submit</button>
            </form>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th></th>
          <th>Amount (₱)</th>
        </tr>
        <tr>
          <th>Revenue</th>
          <th></th>
        </tr>
        <tr>
          <td>Net Sales</td>
          <td>
            <currency-formatter :amount="data.net_sales" />
          </td>
        </tr>
        <tr>
          <th>Expense</th>
          <th></th>
        </tr>
        <tr>
          <td>Cost of Sale</td>
          <td>
            <currency-formatter :amount="data.cost_of_sales" />
          </td>
        </tr>
        <tr>
          <td>Operating Expense</td>
          <td>
            <currency-formatter :amount="data.operating_expense" />
          </td>
        </tr>
        <tr>
          <th>Net Income</th>
          <th>
            <currency-formatter :amount="netIncome(data)" withSymbol="true" />
          </th>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import CurrencyFormatter from "./CurrencyFormatter.vue";
defineProps({
  data: {
    type: Array,
    required: true,
  },
});

const netIncome = (data) => {
  const totalSales = data.net_sales;
  const totalExpense = data.cost_of_sales + data.operating_expense;
  return totalSales - totalExpense;
};

const dateFrom = ref(null);
const dateTo = ref(null);

const emit = defineEmits("date");
const send = () =>
  emit("date", { startDate: dateFrom.value, endDate: dateTo.value });
</script>

<style scoped>
form input,
button {
  margin-left: 10px;
}
</style>

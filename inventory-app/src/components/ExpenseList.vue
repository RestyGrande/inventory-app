<template>
  <div v-if="data">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Expense Name</th>
          <th scope="col">Cost</th>
          <th scope="col">Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(expense, index) in data" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ expense.name }}</td>
          <td>{{ expense.cost }}</td>
          <td><date-formatter :date="expense.date" /></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import DateFormatter from "./DateFormatter.vue";
defineProps({
  data: {
    type: Array,
    required: true,
  },
});
</script>

<style></style>

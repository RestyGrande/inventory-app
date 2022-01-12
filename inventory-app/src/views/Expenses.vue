<template>
  <div>
    <h1>Expenses</h1>
    <div class="line"></div>
    <div v-if="!toggle">
      <button @click="toggle = !toggle" type="button" class="btn btn-primary">
        Add
      </button>
    </div>
    <div v-else>
      <add-expense @cancel="cancelBtn" />
    </div>
    <expense-list :data="data" />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";

import ExpenseList from "../components/ExpenseList.vue";
import AddExpense from "../components/AddExpense.vue";
const toggle = ref(false);
const store = useStore();
store.dispatch("fetchExpense");
const data = computed(() => store.state.expense);

const cancelBtn = () => (toggle.value = false);
</script>

<style></style>

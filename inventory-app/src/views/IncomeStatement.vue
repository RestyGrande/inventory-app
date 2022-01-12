<template>
  <div>
    <h1>Income Statement</h1>
    <div class="line"></div>
    <income-statement-list :data="data" @date="dateRange" />
  </div>
</template>

<script setup>
import IncomeStatementList from "../components/IncomeStatementList.vue";
import { IncomeStatementService } from "../services/incomeStatement";
import { ref, watchEffect } from "vue";
const incomeStatementService = new IncomeStatementService();

const data = ref(null);

const startDate = ref(null);
const endDate = ref(null);

const dateRange = (date) => {
  startDate.value = date.startDate;
  endDate.value = date.endDate;
};
const loadData = async () => {
  try {
    const res = await incomeStatementService.getAll(
      startDate.value,
      endDate.value
    );
    data.value = res.data;
  } catch (error) {
    console.log(error);
  }
};
watchEffect(() => loadData());
</script>

<style></style>

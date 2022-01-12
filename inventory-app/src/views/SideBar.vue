<template>
  <nav id="sidebar">
    <side-bar-header title="Inventory System" />
    <side-bar-list :navList="navList" />
  </nav>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import SideBarHeader from "../components/SideBarHeader.vue";
import SideBarList from "../components/SideBarList.vue";
const navList = ref([
  "Dashboard",
  "Product",
  "Inventory",
  "Purchases",
  "CashRegister",
  "Sales",
  "Expenses",
  "IncomeStatement",
]);
</script>

<style></style>

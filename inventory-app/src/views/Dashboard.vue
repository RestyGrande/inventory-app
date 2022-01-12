<template>
  <div>
    <h1>Dashboard</h1>
    <div class="line"></div>
    <div class="row">
      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Product</h5>
            <h1 class="card-text">{{ data.product }}</h1>
            <router-link :to="{ name: 'Product' }" class="btn btn-primary"
              >View</router-link
            >
          </div>
        </div>
      </div>

      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Purchase</h5>
            <h1 class="card-text">{{ data.purchase }}</h1>
            <router-link :to="{ name: 'Purchases' }" class="btn btn-primary"
              >View</router-link
            >
          </div>
        </div>
      </div>

      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Sales</h5>
            <h1 class="card-text">{{ data.sale }}</h1>
            <router-link :to="{ name: 'Sales' }" class="btn btn-primary"
              >View</router-link
            >
          </div>
        </div>
      </div>

      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Expenses</h5>
            <h1 class="card-text">{{ data.expense }}</h1>
            <router-link :to="{ name: 'Expenses' }" class="btn btn-primary"
              >View</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CountService } from "../services/count";
import { ref } from "vue";
const countService = new CountService();
const data = ref(null);
const loadData = async () => {
  try {
    const res = await countService.getAll();
    data.value = res.data;
  } catch (error) {
    console.log(error);
  }
};
loadData();
</script>

<style></style>

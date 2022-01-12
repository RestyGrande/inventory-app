<template>
  <div v-if="data">
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
        </tr>
      </thead>
      <tbody v-if="data.length != 0">
        <tr v-for="(product, index) in data" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ product.name }}</td>
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
defineProps({
  data: {
    type: Array,
    required: true,
  },
});
</script>

<style>
td,
th {
  text-align: center;
}
</style>

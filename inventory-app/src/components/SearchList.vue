<template>
  <div v-if="data">
    <table class="table table-hover">
      <tbody v-if="data.length != 0">
        <tr v-for="(search, index) in data" :key="index">
          <td>{{ search.name }}</td>
          <td><button @click="selected(search)">Select</button></td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <th scope="row" style="text-align: center">Not Found</th>
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
const emits = defineEmits("selected");
const selected = (data) => emits("selected", data);
</script>

<style></style>

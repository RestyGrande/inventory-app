<template>
  <ul class="list-unstyled components">
    <li v-for="(list, index) in navList" :key="index">
      <router-link
        :to="{ name: list == 'Income Statement' ? 'IncomeStatement' : list }"
        >{{ list }}</router-link
      >
    </li>
  </ul>
</template>

<script setup>
defineProps({
  navList: {
    type: Array,
    required: true,
  },
});
</script>

<style></style>

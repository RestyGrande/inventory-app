<template>
  <div class="sidebar-header" v-if="title">
    <h3>{{ title }}</h3>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    require: true,
  },
});
</script>

<style></style>

<template>
  <span v-if="date">
    {{ date }}
  </span>
</template>

<script setup>
import dayjs from "dayjs";
import { computed } from "vue";
const props = defineProps({
  date: {
    type: String,
    required: true,
  },
});
const date = computed(() => dayjs(props.date).format("DD/MM/YYYY"));
</script>

<style></style>

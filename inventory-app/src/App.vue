<template>
  <div class="wrapper">
    <side-bar />
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import SideBar from "./views/SideBar.vue";
</script>
<style></style>

<template>
  <div>
    <h1>Inventory</h1>
    <div class="line"></div>
    <div v-if="!toggle" class="searchForm">
      <form>
        <div class="form-group">
          <label for="inputsm">Search (Product)</label>
          <input
            class="form-control input-sm"
            id="inputsm"
            v-model="searchValue"
            type="text"
            @keyup="search"
          />
        </div>
      </form>
    </div>
    <div v-if="searchData">
      <inventory-list :data="searchData" />
    </div>
    <div v-else>
      <inventory-list :data="data" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref, onBeforeUnmount } from "vue";
import InventoryList from "../components/InventoryList.vue";
import useSearchProduct from "../composable/useSearchProduct";
const store = useStore();
store.dispatch("fetchInventory");
const data = computed(() => store.state.inventory);

const searchValue = ref(null);
const searchData = ref(null);
const search = () => {
  const prodData = store.state.inventory;
  searchData.value = useSearchProduct(prodData, searchValue.value);
};
onBeforeUnmount(() => {
  window.removeEventListener("keyup", search);
});
</script>

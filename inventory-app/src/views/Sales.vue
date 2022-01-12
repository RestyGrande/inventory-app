<template>
  <div>
    <h1>Sales</h1>
    <div class="line"></div>
    <div>
      <div class="mb-3" v-if="toggle">
        <label for="exampleInputEmail1" class="form-label"
          >Search (Product)</label
        >
        <input
          type="text"
          class="form-control"
          v-model="searchValue"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          @keyup="search"
        />
      </div>

      <div v-if="searchData && !seletedProduct">
        <search-list :data="searchData" @selected="isSelected" />
      </div>
      <div v-if="seletedProduct">
        <add-sale
          :selectedProduct="seletedProduct"
          @cancel="cancelBtn"
          @success="successBtn"
        />
      </div>
    </div>
    <sale-list :data="data" />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref, onBeforeUnmount } from "vue";
import SaleList from "../components/SaleList.vue";
import SearchList from "../components/SearchList.vue";
import AddSale from "../components/AddSale.vue";
import useSearchProduct from "../composable/useSearchProduct";
const store = useStore();
store.dispatch("fetchSale");
store.dispatch("fetchProduct");
const data = computed(() => store.state.sale);
const toggle = ref(true);
const searchValue = ref(null);
const searchData = ref(null);
const search = (evt) => {
  const prodData = store.state.product;
  searchData.value = useSearchProduct(prodData, searchValue.value);
  if (evt.keyCode === 27) {
    searchData.value = null;
    searchValue.value = null;
  }
};
const seletedProduct = ref(null);
const isSelected = (data) => {
  toggle.value = false;
  seletedProduct.value = data;
  searchValue.value = null;
};
const cancelBtn = () => {
  toggle.value = true;
  seletedProduct.value = null;
  searchValue.value = null;
  searchData.value = null;
};
const successBtn = () => {
  toggle.value = true;
  seletedProduct.value = null;
  searchValue.value = null;
  searchData.value = null;
};
onBeforeUnmount(() => {
  window.removeEventListener("keyup", search);
});
</script>

<style></style>

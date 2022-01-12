<template>
  <div>
    <h1>Purchases</h1>
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
        <add-purchase
          :selectedProduct="seletedProduct"
          @cancel="cancelBtn"
          @success="successBtn"
        />
      </div>
    </div>

    <purchase-list :data="data" />
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref, onBeforeUnmount } from "vue";
import PurchaseList from "../components/PurchaseList.vue";
import AddPurchase from "../components/AddPurchase.vue";
import SearchList from "../components/SearchList.vue";
import useSearchProduct from "../composable/useSearchProduct";
const store = useStore();
store.dispatch("fetchPurchase");
store.dispatch("fetchProduct");
const data = computed(() => store.state.purchase);
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
  searchValue.value = null;
  toggle.value = false;
  seletedProduct.value = data;
};
const cancelBtn = () => {
  toggle.value = true;
  searchValue.value = null;
  searchData.value = null;
  seletedProduct.value = null;
};
const successBtn = () => {
  seletedProduct.value = null;
  toggle.value = true;
  searchValue.value = null;
  searchData.value = null;
};
onBeforeUnmount(() => {
  window.removeEventListener("keyup", search);
});
</script>

<style></style>

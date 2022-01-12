<template>
  <div>
    <h1>Product</h1>
    <div class="line"></div>
    <div v-if="!toggle" class="searchForm">
      <form>
        <div class="form-group">
          <label for="inputsm">Search</label>
          <input
            class="form-control input-sm"
            id="inputsm"
            v-model="searchValue"
            type="text"
            @keyup="search"
          />
        </div>
      </form>
      <button @click="toggle = !toggle" type="button" class="btn btn-primary">
        Add
      </button>
    </div>
    <div v-else>
      <add-product @cancel="cancelBtn" />
    </div>

    <div v-if="searchData">
      <product-list :data="searchData" />
    </div>
    <div v-else>
      <product-list :data="data" />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref, onBeforeUnmount } from "vue";
import AddProduct from "../components/AddProduct.vue";
import ProductList from "../components/ProductList.vue";
import useSearchProduct from "../composable/useSearchProduct";

const toggle = ref(false);
const store = useStore();
store.dispatch("fetchProduct");
const data = computed(() => store.state.product);
const searchValue = ref(null);
const searchData = ref(null);
const search = () => {
  const prodData = store.state.product;
  searchData.value = useSearchProduct(prodData, searchValue.value);
};

const cancelBtn = () => (toggle.value = false);
onBeforeUnmount(() => {
  window.removeEventListener("keyup", search);
});
</script>

<style>
.btn {
  margin: 20px;
}
#inputsm {
  width: 30%;
}
.searchForm {
  display: flex;
}
.searchForm form {
  width: 100%;
  justify-content: left;
}
</style>

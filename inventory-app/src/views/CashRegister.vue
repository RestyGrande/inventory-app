<template>
  <div>
    <h1>Cash Register</h1>
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
    <div v-if="data">
      <cash-register-list
        :data="data"
        @remove="removeItem"
        :totalAmount="totalAmount"
      />
    </div>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { ref, onBeforeUnmount, computed } from "vue";
import SearchList from "../components/SearchList.vue";
import AddSale from "../components/AddSale.vue";
import useSearchProduct from "../composable/useSearchProduct";
import CashRegisterList from "../components/CashRegisterList.vue";

const store = useStore();
const data = computed(() => store.state.order);
store.dispatch("fetchProduct");

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

const totalAmount = computed(() => {
  let result = 0;
  if (data.value != 0) {
    result = data.value
      .map((sale) => {
        const quantity = sale.quantity;
        const price = sale.unitPrice;
        const amount = price * quantity;
        return amount;
      })
      .reduce((x, y) => x + y);
  }
  return result;
});
const removeItem = (id) => {
  store.dispatch("removeOrder", id);
};
</script>

<style scoped>
#table th {
  width: 0px;
}
</style>

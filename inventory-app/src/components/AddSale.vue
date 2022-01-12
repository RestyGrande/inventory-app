<template>
  <div>
    <form @submit.prevent="save">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Product Name</label>
        <input
          type="text"
          class="form-control"
          :value="name"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Quantity</label>
        <input
          v-model="quantity"
          type="number"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"
          >Price(Per Unit)</label
        >
        <input
          v-model="unitPrice"
          type="number"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"
          >Total Price</label
        >

        <input
          :value="totalPrice"
          type="number"
          class="form-control"
          id="exampleInputPassword1"
          readonly
        />
      </div>

      <div class="btn">
        <button type="submit" class="btn btn-primary">Submit</button>
        <button type="submit" class="btn btn-danger" @click="cancel">
          Cancel
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
const props = defineProps({
  selectedProduct: { type: Object, required: true },
});

const emit = defineEmits(["cancel", "success"]);
const name = ref(props.selectedProduct.name);
const quantity = ref(null);
const unitPrice = ref(null);
const cancel = () => emit("cancel");
const store = useStore();
const totalPrice = computed(() => unitPrice.value * quantity.value);
const save = () => {
  const data = {
    quantity: quantity.value,
    unitPrice: unitPrice.value,
    ProductId: props.selectedProduct.id,
    date: Date.now(),
  };
  store.dispatch("addOrder", data);
  name.value = "";
  quantity.value = "";
  unitPrice.value = "";
  totalPrice.value = "";

  emit("success");
};
</script>

<style scoped>
.btn {
  margin: 20px;
}
</style>

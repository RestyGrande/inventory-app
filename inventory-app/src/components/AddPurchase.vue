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
          >Cost(Per Unit)</label
        >
        <input
          v-model="unitCost"
          type="number"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Total Cost</label>

        <input
          :value="totalCost"
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
console.log("Props", props.selectedProduct.name);
const emit = defineEmits(["cancel", "success"]);
const name = ref(props.selectedProduct.name);
const quantity = ref(null);
const unitCost = ref(null);
const cancel = () => emit("cancel");
const totalCost = computed(() => unitCost.value * quantity.value);
const store = useStore();
const save = async () => {
  try {
    const data = {
      quantity: quantity.value,
      unitCost: unitCost.value,
      ProductId: props.selectedProduct.id,
      date: Date.now(),
    };
    console.log(data);
    await store.dispatch("addPurchase", data);
    name.value = "";
    quantity.value = "";
    unitCost.value = "";
    totalCost.value = "";

    emit("success");
  } catch (error) {
    console.log(error);
  }
};
</script>

<style scoped>
.btn {
  margin: 20px;
}
</style>

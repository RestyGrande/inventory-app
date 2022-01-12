<template>
  <div>
    <form @submit.prevent="save">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Product Name</label>
        <input
          type="text"
          class="form-control"
          v-model="prodName"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
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
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
const emit = defineEmits(["cancel", "success"]);
const prodName = ref(null);
const store = useStore();
const cancel = () => emit("cancel");
const save = async () => {
  try {
    const data = {
      name: prodName.value,
    };
    await store.dispatch("addProduct", data);
    prodName.value = "";
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

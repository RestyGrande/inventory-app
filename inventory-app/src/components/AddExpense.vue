<template>
  <div>
    <form @submit.prevent="save">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Expense Name</label>
        <input
          type="text"
          class="form-control"
          v-model="name"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Cost</label>
        <input
          type="number"
          class="form-control"
          v-model="cost"
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
const name = ref(null);
const cost = ref(null);
const store = useStore();
const cancel = () => emit("cancel");
const save = async () => {
  try {
    const data = {
      name: name.value,
      cost: cost.value,
      date: Date.now(),
    };
    await store.dispatch("addExpense", data);
    name.value = "";
    cost.value = "";
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

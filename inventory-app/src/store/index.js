import { createStore } from "vuex";
import { ProductService } from "../services/product";
import { SaleService } from "../services/sale";
import { PurchaseService } from "../services/puchase";
import { ExpenseService } from "../services/expense";
import { InventoryService } from "../services/inventory";

const productService = new ProductService();
const saleService = new SaleService();
const purchaseService = new PurchaseService();
const expenseService = new ExpenseService();
const inventoryService = new InventoryService();

export default createStore({
  state: {
    product: [],
    purchase: [],
    sale: [],
    inventory: [],
    expense: [],
    order: [],
  },
  mutations: {
    SET_ORDER(state) {
      state.order = [];
    },
    SET_PRODUCT(state, data) {
      state.product = data;
    },
    SET_PURCHASE(state, data) {
      state.purchase = data;
    },
    SET_SALE(state, data) {
      state.sale = data;
    },
    SET_INVENTORY(state, data) {
      state.inventory = data;
    },
    SET_EXPENSE(state, data) {
      state.expense = data;
    },
    ADD_PRODUCT(state, data) {
      state.product.unshift(data);
    },
    ADD_PURCHASE(state, data) {
      state.purchase.unshift(data);
    },
    ADD_EXPENSE(state, data) {
      state.expense.unshift(data);
    },
    ADD_SALE(state, data) {
      state.sale.unshift(data);
    },
    ADD_ORDER(state, data) {
      state.order.push(data);
    },
    REMOVE_ORDER(state, id) {
      state.order.splice(id, 1);
    },
  },
  actions: {
    // ALL DATA
    async fetchProduct({ commit }) {
      try {
        const res = await productService.getAll();
        commit("SET_PRODUCT", res.data);
      } catch (error) {
        console.log("Unable to fetch product :", error);
      }
    },
    async fetchPurchase({ commit }) {
      try {
        const res = await purchaseService.getAll();
        commit("SET_PURCHASE", res.data);
      } catch (error) {
        console.log("Unable to fetch purchase :", error);
      }
    },
    async fetchSale({ commit }) {
      try {
        const res = await saleService.getAll();
        commit("SET_SALE", res.data);
      } catch (error) {
        console.log("Unable to fetch sale :", error);
      }
    },
    async fetchInventory({ commit }) {
      try {
        const res = await inventoryService.getAll();
        const data = res.data.sort(
          (a, b) => a.inventory_count - b.inventory_count
        );
        commit("SET_INVENTORY", data);
      } catch (error) {
        console.log("Unable to fetch inventory :", error);
      }
    },
    async fetchExpense({ commit }) {
      try {
        const res = await expenseService.getAll();
        commit("SET_EXPENSE", res.data);
      } catch (error) {
        console.log("Unable to fetch expense :", error);
      }
    },
    //ADD METHODS
    async addProduct({ commit }, data) {
      try {
        const res = await productService.add(data);
        commit("ADD_PRODUCT", data);
        console.log(res.status);
      } catch (error) {
        console.log("Unable to add product :", error);
      }
    },
    async addPurchase({ commit }, data) {
      try {
        const res = await purchaseService.add(data);
        commit("ADD_PURCHASE", data);
        console.log(res.status);
      } catch (error) {
        console.log("Unable to add purchase :", error);
      }
    },
    async addSale({ commit }, data) {
      try {
        const res = await saleService.add(data);
        commit("ADD_SALE", data);
        console.log(res.status);
      } catch (error) {
        console.log("Unable to add sale :", error);
      }
    },
    async addExpense({ commit }, data) {
      try {
        const res = await expenseService.add(data);
        commit("ADD_EXPENSE", data);
        console.log(res.status);
      } catch (error) {
        console.log("Unable to add expense :", error);
      }
    },
    addOrder({ commit }, data) {
      commit("ADD_ORDER", data);
    },
    removeOrder({ commit }, id) {
      commit("REMOVE_ORDER", id);
    },
    resetOrder({ commit }) {
      commit("SET_ORDER");
    },
  },
  modules: {},
});

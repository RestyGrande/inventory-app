import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/sales",
    name: "Sales",
    component: () =>
      import(/* webpackChunkName: "Sales" */ "../views/Sales.vue"),
  },
  {
    path: "/purchases",
    name: "Purchases",
    component: () =>
      import(/* webpackChunkName: "Purchases" */ "../views/Purchases.vue"),
  },
  {
    path: "/expenses",
    name: "Expenses",
    component: () =>
      import(/* webpackChunkName: "Expenses" */ "../views/Expenses.vue"),
  },
  {
    path: "/product",
    name: "Product",
    component: () =>
      import(/* webpackChunkName: "Expenses" */ "../views/Product.vue"),
  },
  {
    path: "/inventory",
    name: "Inventory",
    component: () =>
      import(/* webpackChunkName: "Expenses" */ "../views/Inventory.vue"),
  },
  {
    path: "/incomestatement",
    name: "IncomeStatement",
    component: () =>
      import(
        /* webpackChunkName: "IncomeStatement" */ "../views/IncomeStatement.vue"
      ),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "PageNotFound" */ "../views/NotFound.vue"),
  },
  {
    path: "/cashregister",
    name: "CashRegister",
    component: () =>
      import(
        /* webpackChunkName: "PageNotFound" */ "../views/CashRegister.vue"
      ),
  },
  {
    path: "/receipt",
    name: "Receipt",
    component: () =>
      import(/* webpackChunkName: "PageNotFound" */ "../views/Receipt.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from 'vue-router'
/* import views */
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import DashboardView from "../views/DashboardView.vue";
import SuppliersView from "../views/Supplier-v/SuppliersView.vue";
import SupplierDetailsView from "../views/Supplier-v/SupplierDetailsView.vue";
import CategoriesView from "../views/Category-v/CategoriesView.vue";
import CategoryDetailsView from "../views/Category-v/CategoryDetailsView.vue";
import ProductsView from "../views/Product-v/ProductsView.vue/";
import ProductDetailsView from "../views/Product-v/ProductDetailsView.vue";
import SearchView from "../views/Search-v/SearchView.vue";




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      /* login path */
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      /* register path */
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      /* path to dashboard/control panel */
      path: '/',
      name: 'dashboard',
      component: DashboardView
    },
    {
      /* path to all suppliers + add supplier */
      path: '/suppliers',
      name: 'suppliers',
      component: SuppliersView
    },
    {
      /* path to specific supplier by id */
      path: '/supplier/:id',
      name: 'supplierdetails',
      component: SupplierDetailsView
    },
    {
      /* path to categories + add category */
      path: '/categories',
      name: 'categories',
      component: CategoriesView
    },
    {
      /* path to specific category by id */
      path: '/categories/:id',
      name: 'categoriesdetails',
      component: CategoryDetailsView
    },
    {
      /* path to products + add products */
      path: '/products',
      name: 'products',
      component: ProductsView
    },
    {
      /* search products + id */
      path: '/products/:id',
      name: 'productsdetails',
      component: ProductDetailsView
    },
    {
      /* search id */
      path: '/search/:id',
      name: 'search',
      component: SearchView
    },
  ]
})

export default router

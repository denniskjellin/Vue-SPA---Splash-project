<template>
  <div class="col-span-12 md:col-span-6 m-4 md:m-2">
    <h1 class="text-2xl mb-1">Welcome dear employee!</h1>
    <p>
   Splash Industries intrawebb panel alows you to easily access our database data for products, suppliers and categories. For adding information regarding theese subjects simply navigate through the blocks below.</p>
   <p class="mt-2">Can't find the product your looking for? Then simply use the searchbar in the top-right to easier navigate through the products.</p>
    
  </div>
  <div class="col-span-12 md:col-span-6 m-4 md:m-2">
    <h2 class="mb-1 text-2xl">Important</h2>
    <p>
      Intranet management for <strong>Splash Industries</strong>. Please note that any information displayed on this site is for employes only. Do not spread information of products or anything related to suppliers or ctagories in any matter.
    </p>
  </div>
  <div class="col-span-12">
    <div class="flex justify-center">
<h2 class="text-2xl">Manage storage</h2>
    </div>
    <p class="text-center">Handle anything related to our business in the cards below. Go to the section of choice for handeling data related to the subject.</p>
  </div>

  <div class="col-span-12 md:col-span-4 m-4 md:m-2">
    <div class="flex justify-center">
      <RouterLink to="/suppliers">
        <div
          class="rounded-lg shadow-lg bg-white max-w-sm border-gray-200 hover:shadow-2xl hover:bg-blue-100"
        >
          <img
            class="rounded-t-lg"
            src="../assets/images/supplier_card.jpg"
            alt=""
          />
          <div class="p-6">
            <h5 class="text-gray-900 text-lg font-medium mb-2">
              Suppliers overview
            </h5>
            <p class="text-gray-700 text-base mb-4">
              Handle <strong>suppliers</strong> and it contents.
            </p>
            <button
              type="button"
              class="inline-block px-6 py-2.5 bg-blue-500 text-white text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg transition duration-150 ease-in-out font-bold"
            >
              <RouterLink to="/suppliers">Suppliers</RouterLink>
            </button>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
  <div class="col-span-12 md:col-span-4 m-4 md:m-2 h-fit">
    <div class="flex justify-center">
      <RouterLink to="/categories">
        <div
          class="rounded-lg shadow-lg bg-white max-w-sm border-gray-200 hover:shadow-2xl hover:bg-blue-100"
        >
          <img
            class="rounded-t-lg"
            src="../assets/images/categories_card.jpg"
            alt=""
          />
          <div class="p-6">
            <h5 class="text-gray-900 text-lg font-medium mb-2">
              Categories overview
            </h5>
            <p class="text-gray-700 text-base mb-4">
              Handle <strong>categories</strong> and it contents.
            </p>
            <button
              type="button"
              class="inline-block px-6 py-2.5 bg-blue-500 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg transition duration-150 ease-in-out"
            >
              <RouterLink to="/categories">Categories</RouterLink>
            </button>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
  <div class="col-span-12 md:col-span-4 m-4 md:m-2">
    <div class="flex justify-center">
      <RouterLink to="/products">
        <div
          class="rounded-lg shadow-lg bg-white max-w-sm border-gray-200 hover:shadow-2xl hover:bg-blue-100"
        >
          <img
            class="rounded-t-lg w-fit"
            src="../assets/images/product_card.jpg"
            alt=""
          />
          <div class="p-6">
            <h5 class="text-gray-900 text-lg font-medium mb-2">
              Products overview
            </h5>
            <p class="text-gray-700 text-base mb-4">
              Handle <strong>products</strong> and it contents.
            </p>
            <button
              type="button"
              class="inline-block px-6 py-2.5 bg-blue-500 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg transition duration-150 ease-in-out"
            >
              <RouterLink to="/products">Products</RouterLink>
            </button>
          </div>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

export default {
  RouterView,
  name: "Dashboard",
  data() {
    return {
      token: localStorage.getItem("token"),
    };
  },
  methods: {},
  mounted() {
    if (!this.token) {
      this.$router.push({ name: "login" });
      alert("You have to login to access this page.");
    }
  },
};
</script>

<style>
.main-content {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
}
</style>

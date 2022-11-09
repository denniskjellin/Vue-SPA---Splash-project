<template>
  <header class="bg-gray-700">
    <nav class="p-5 shadow md:flex md:items-center md:justify-between">
      <div class="flex justify-between items-center">
        <!--Styling span, text-size 2xl, font is bold, cursor = pointer-->
        <!-- router link to dashboard -->
        <RouterLink to="/">
          <span class="text-2xl font-bold cursor-pointer"> Splash </span>
        </RouterLink>
      </div>
      <!-- search bar -->
      <section>
        <!-- event listener on button -->
          <button @click="searchFunction()" class="mr-2 bg-slate-400 p-1.5 rounded" type="submit">
            Search
          </button>
          <input v-model="searchProduct"
            id="search"
            type="text"
            placeholder="search product.."
            class="shadow appearance-none border rounded py-2 px-3 mt-2 md:mt-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
      </section>
    </nav>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";
import router from "../router";
export default {
  data() {
    return {
      searchProduct: "",
      /* get token from localstorage */
      token: localStorage.getItem("token")
    };
  },
  components: {
    RouterLink,
  },
  methods: {
    searchFunction() {
     router.push("/search/" + this.searchProduct)
    },
  },
};
</script>

<style scoped>
nav {
  color: white;
}
</style>

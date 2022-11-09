<template>
  <!-- search view -->
  <div class="col-span-12 md:col-span-12 main-content pl-2">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
      <h1 class="m-4 text-2xl">Search result</h1>
      <div v-if="message">
            <p class="text-xl" v-html="message"></p>
          </div>
      <section class="lg:w-3/6 mb-12 mt-1">
     <p class="text-center text-gray-500 text-m">
      *Products that matched your search-word in a partial or complete way will show up as results. To edit or delete simple choose your product to handle. 
     </p>
    </section>
      <div class="grid grid-cols-12">
        <!-- component show products -->
        <ShowProducts
          @deleteProduct="deleteProduct(product.id)"
          @editProduct="editProduct(product.id)"
          v-for="product in products"
          :product="product"
          :key="product.id"
        />
      </div>
    </div>
    </div>
</template>

<script>
import axios from "axios";
import Sidebar from "../../components/Sidebar.vue";
import ShowProducts from "../../components/Products-com/ShowProducts.vue";
import router from "../../router";

export default {
  data() {
    return {
      token: localStorage.getItem("token"),
      products: [],
      message: [],
    };
  },
  /* computed property */
  computed: {
    /* searchstring contains route params + id */
    searchString() {
      return this.$route.params.id;
    },
  },
  /* watch on data changes.. trigger function if change */
  watch: {
    searchString() {
      this.searchProducts(this.searchString);
    }
  },
  /* imported components */
  components: {
    Sidebar,
    ShowProducts,
  },
  /* methods created */
  methods: {
    async searchProducts() {
      /* id = id in url field */
      const id = this.$route.params.id;
      await axios
        /* get route for search + id */
        .get("http://localhost:8000/api/getproducts/search/product/" + id)
        .then((response) => {
          this.products = response.data;
          if(this.products.length == 0) {
            this.message = "Could not find any matching products.";
          } else {
            this.message = ""
          }
        }) 
        .catch((error) => {
          /* if products cant be found, clean out the old product from screen and show error msg*/
          this.products = "";
          
        });
    },
    /* delete with id */
    async deleteProduct(id) {
      if(this.confirmDelete()) {
      const resp = await axios(
        "http://localhost:8000/api/deleteproducts/" + id,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            /* token required */
            Authorization: `Bearer ${this.token}`,
          },
        }
      );
      const data = resp.data;
      this.searchProducts();
    } else {
      alert("The product is NOT deleted!!");
    }
    },


    /* edit product - id */
    editProduct(id) {
      /* push products + id */
      router.push("/products/" + id);
    },

    confirmDelete() {
      let userselection = confirm(
        "Are you sure you want to delete this product permanently?"
      );

      if (userselection == true) {
        alert("Product deleted!");
       return true;
      } else {
        return false;
      }
    },
  },

  mounted() {
    /* load function */
    this.searchProducts();

    /* send user to login if needed */
    if (!this.token) {
      this.$router.push({ name: "login" });
      alert("You have to login to access this function.");
    }
  },
};
</script>

<template>
  <div class="col-span-12 md:col-span-12 main-content pl-2">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
    >
      <h1 class="m-4">Edit product: {{ product.name }}</h1>

      <div class="w-full max-w-lg">
        <form
          @submit.prevent="updateProduct(id)"
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
           <!-- OK message output -->
         <div v-if="message">
            <p class="text-green-700" v-html="message"></p>
          </div>
               <!-- error msg output -->
               <div class="text-red-700 mb-2" v-if="errorMsg">
            <p v-html="errorMsg"></p>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Product name
            </label>
            <input
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter name.."
              v-model="product.name"
            />
          </div>

          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="supplier_id"
            >
              Supplier
            </label>
            <select
              required
              v-model="product.supplier_id"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="supplier_id"
              name="supplier_id"
            >
              <option value="" disabled selected>Select supplier</option>
              <option
                v-for="supplier in suppliers"
                :supplier="supplier"
                :key="supplier.id"
                :value="supplier.id"
              >
                {{ supplier.name }}
              </option>
            </select>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="category_id"
            >
              Category
            </label>
            <select
              required
              v-model="product.category_id"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category_id"
              name="category_id"
            >
              <option value="" disabled selected>Select category</option>
              <option
                v-for="categories in categories"
                :categories="categories"
                :key="categories.id"
                :value="categories.id"
              >
                {{ categories.name }}
              </option>
            </select>
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Amount
            </label>
            <input
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="0"
              v-model="product.amount"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Price
            </label>
            <input
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="0"
              v-model="product.price"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              Info
            </label>
            <textarea
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-h-80"
              id="name"
              type="text"
              placeholder="Info.."
              v-model="product.info"
            ></textarea>
          </div>

          <div class="flex items-center justify-between">
            <input
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline leading-tight uppercase px-3 text-sm"
              type="submit"
              value="Update"
            />
            <!-- <input type="submit" value="Add Supplier" /> -->
          </div>
        </form>
      </div>
      <section class="lg:w-3/6">
        <p class="text-center text-gray-500 text-m">
          *To update the product, enter information that you want to submit to
          the product, then press Update. <strong>Image</strong> can't be
          edited and can't be of format <strong>webp</strong> or <strong>avif</strong>. If necessary delete the product and add it again with another
          image. If product have ben updated successfully you will be redirected
          to the product page summary.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Sidebar from "../../components/Sidebar.vue";
import ShowProducts from "../../components/Products-com/ShowProducts.vue";

export default {
  data() {
    return {
      token: localStorage.getItem("token"),
      suppliers: [],
      product: [],
      categories: [],
      message: "",
      errorMsg: "",
    };
  },
  components: {
    Sidebar,
    ShowProducts,
  },
  methods: {
    async getProducts() {
      const id = this.$route.params.id;
      await axios
        .get("http://localhost:8000/api/getproducts/" + id)
        .then((response) => {
          this.product = response.data;
        })
        .catch((error) => {
          this.errorMsg = "Couldn't load product!";
        });
    },
    async getCategories() {
      await axios
        .get("http://localhost:8000/api/getcategories")
        .then((response) => {
          this.categories = response.data;
        })
        .catch((error) => {
          this.errorMsg = "Couldn't load categories!";
        });
    },
    async getSuppliers() {
      await axios
        .get("http://localhost:8000/api/getsuppliers")
        .then((response) => {
          this.suppliers = response.data;
        })
        .catch((error) => {
          this.errorMsg = "Couldn't load suppliers!";
        });
    },
    updateProduct() {
      if (this.product.name.length > 1) {
        if (this.form.info.length >9) {
      const id = this.$route.params.id;
      axios
        .put(
          "http://localhost:8000/api/updateproducts/" + id,
          this.product,

          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.token}`,
            },
          }
        )
        .then((response) => {
          this.errorMsg = "";
          this.message = "Updated successfully";
          setTimeout(() => this.$router.push({ path: "/products" }), 2000);

          /* this.form = {}; */
        })
        .catch((error) => {
          this.message = "";
          this.errorMsg = "Update failed, check inputs and try again!";
        });
      } else {
        this.errorMsg = "Product info must be 10 character or more.";
      }
      } else {
        this.errorMsg =
          "Product name must be 2 character or more.";
      }
    },
  },
  mounted() {
    this.getProducts();
    this.getSuppliers();
    this.getCategories();

    if (!this.token) {
      this.$router.push({ name: "login" });
      alert("You have to login to access this page.");
    }
  },
};
</script>

<template>
  <div class="col-span-12 md:col-span-12 main-content pl-2">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
    >
      <h1 class="m-4">Products page</h1>
      <section>
        <label
          for="default-toggle"
          class="inline-flex relative items-center cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="default-toggle"
            class="sr-only peer"
          />
          <!-- eventListener for "toggleForm" -->
          <div
            @click="toggleForm()"
            id="toggle-btn"
            class="w-11 h-6 mb-4 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"
          ></div>
          <span
            class="ml-3 mb-4 text-md font-medium text-gray-900 dark:text-gray-300"
            >Add product</span
          >
        </label>
      </section>
      <div id="toggleForm" class="w-full max-w-lg hidden">
        <form
          @submit.prevent="addProducts"
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
              v-model="form.name"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="supplier_id"
            >
              Supplier
            </label>
            <!-- select options for supplier_id -->
            <select
              required
              v-model="form.supplier_id"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="supplier_id"
              name="supplier_id"
            >
              <option value="" disabled selected>Select supplier</option>
              <!-- loop out supplier in suppliers -->
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
            <!-- select options for category_id -->
            <select
              required
              v-model="form.category_id"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="category_id"
              name="category_id"
            >
              <option value="" disabled selected>Select category</option>
              <!-- loop out categories in categories -->
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
              for="amount"
            >
              Amount
            </label>
            <input
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="number"
              placeholder="0"
              v-model="form.amount"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="price"
            >
              Price
            </label>
            <input
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="int"
              placeholder="0"
              v-model="form.price"
            />
          </div>
          <div class="mb-4">
            <!-- image  -->
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="image"
            >
              Image
            </label>
            <!-- event listener on fileUpload. -->
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type="file"
              placeholder="Enter name.."
              ref="file"
              @change="fileUpload()"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="info"
            >
              Info
            </label>
            <textarea
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-h-80"
              id="price"
              type="int"
              placeholder="Enter product info.."
              v-model="form.info"
            ></textarea>
          </div>

          <div class="flex items-center justify-between">
            <input
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline leading-tight uppercase px-3 text-sm"
              type="submit"
              value="Add product"
            />
          </div>
        </form>
        <section class="w-full mb-12 mt-1">
          <p class="text-center text-gray-500 text-m">
            *To submit a product enter the information you want to add, then
            press submit button to store it. If you want to edit or delete a
            product you can select the product you want to handle below. Image
            format
            <strong>webp</strong> and <strong>avif</strong> is invalid.
          </p>
        </section>
      </div>
    </div>
    <div class="grid grid-cols-12">
      <!-- loop out suppliers, component  -->
      <ShowProducts
        @deleteProduct="deleteProduct(product.id)"
        @editProduct="editProduct(product.id)"
        v-for="product in products"
        :product="product"
        :key="product.id"
      />
    </div>
    <div class="flex justify-center mt-12 mb-4">
    <button @click="getProducts('http://localhost:8000/api/getproducts?page=' + number)" class="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l" v-for="number in last_page">{{number}}</button>
  </div>
  </div>
  
</template>

<script>
/* imports */
import axios from "axios";
import Sidebar from "../../components/Sidebar.vue";
import ShowProducts from "../../components/Products-com/ShowProducts.vue";
import router from "../../router";
/* exports */
export default {
  data() {
    return {
      /* get token from localstorage */
      token: localStorage.getItem("token"),
      /* form values */
      form: {
        name: "",
        supplier_id: "",
        category_id: "",
        amount: "",
        price: "",
        image: "",
        info: "",
      },
      /* store in: */
      products: {},
      suppliers: [],
      categories: [],
      message: "",
      errorMsg: "",
      last_page: null
    };
  },
  /* components used */
  components: {
    Sidebar,
    ShowProducts,
  },
  /* created methods */
  methods: {
    /* edit product - id */
    editProduct(id) {
      router.push("products/" + id);
    },
    /* method for show/hide form */
    toggleForm() {
      let toggleBtn = document.querySelector("#toggleForm");
      toggleBtn.classList.toggle("block");
      toggleBtn.classList.toggle("hidden");
    },
    /* get products */
    async getProducts(url = "http://localhost:8000/api/getproducts") {

      await axios
        .get(url)
        .then((response) => {
          this.products = response.data.data;
          this.last_page = response.data.last_page;
          this.last_page = parseInt(this.last_page)
          
        })
        .catch((error) => {
          this.errorMsg = "Couldn't load products!";
        });
    },
    /* get suppliers to use its data */
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
    /* get categories to use its data */
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
    /* add products */
    addProducts() {
      /* check input length */
      if (this.form.name.length > 1)
       {
        if (this.form.info.length >9) {
        axios
          .post("http://localhost:8000/api/addproducts", this.form, {
            headers: {
              /* multipart form data for - file upload  */
              "Content-Type": "multipart/form-data",
              /* send token */
              Authorization: `Bearer ${this.token}`,
            },
          })
          .then((response) => {
            this.message = "Product added successfully";
            /* empty form & errorMsg values on send */
            (this.errorMsg = ""), (this.form = {});
            this.$refs.file.value = "";
            /* call to method */
            this.getProducts();
          })
          .catch((error) => {
            /* if errors */
            this.message = "";
            this.errorMsg =
              "Couldn't add product, check input fields and try again!";
          });
        } else {
          this.errorMsg = "Product info must be 10 character or more.";
        }
        /*  */
      } else {
        this.errorMsg = "Product name must be 2 character or more.";
      }
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

      this.getProducts();
      } else {
        alert("The product is NOT deleted!!");
      }
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

    /* file upload method */
    fileUpload() {
      this.form.image = this.$refs.file.files[0];
    },
  },
  mounted() {
    this.getProducts();
    this.getSuppliers();
    this.getCategories();

    /* required page */
    if (!this.token) {
      this.$router.push({ name: "login" });
      alert("You have to login to access this page.");
    }
  },
  computed: {},
};
</script>

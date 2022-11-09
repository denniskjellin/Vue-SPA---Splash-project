<template>
  <div class="col-span-12 md:col-span-12 main-content pl-2">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
    >
      <h1 class="m-4">Categories page</h1>
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
            >Add category</span
          >
        </label>
      </section>
      <div id="toggleForm" class="w-full max-w-lg hidden">
        <form
          @submit.prevent="addCategory"
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
              Name
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
          <div class="flex items-center justify-between">
            <input
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline leading-tight uppercase px-3 text-sm"
              type="submit"
              value="Add category"
            />
            <!-- <input type="submit" value="Add Supplier" /> -->
          </div>
        </form>
        <section class="mb-12 mt-1">
          <p class="text-center text-gray-500 text-m">
            *To submit a category enter the information you want to add, then
            press submit button to store it. If you want to edit or delete a
            category you can select the category you want to handle below.
            Please note a category withholding products
            <strong>can't</strong> be deleted before the products are deleted.
            Category name can only hold letters a-z, minimun 3 characters.
          </p>
        </section>
      </div>
    </div>

    <div class="grid grid-cols-12">
      <!-- loop out categories  -->
      <ShowCategories
        @deleteCategory="deleteCategory(category.id)"
        @editCategory="editCategory(category.id)"
        v-for="category in categories"
        :category="category"
        :key="category.id"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Sidebar from "../../components/Sidebar.vue";
import router from "../../router";
import ShowCategories from "../../components/Category-com/ShowCategories.vue";

export default {
  data() {
    return {
      token: localStorage.getItem("token"),
      form: {
        name: "",
      },
      categories: [],
      message: "",
      errorMsg: "",
    };
  },
  components: {
    Sidebar,
    ShowCategories,
  },
  methods: {
    editCategory(id) {
      router.push("categories/" + id);
    },
    /* method for show/hide form */
    toggleForm() {
      let toggleBtn = document.querySelector("#toggleForm");
      toggleBtn.classList.toggle("block");
      toggleBtn.classList.toggle("hidden");
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
    addCategory() {
      if (this.form.name.length > 2) {
        axios
          .post("http://localhost:8000/api/addcategories", this.form, {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.token}`,
            },
          })
          .then((response) => {
            this.message = "Category added successfully";
            (this.errorMsg = ""), (this.form = {});
            this.getCategories();
          })
          .catch((error) => {
            /* empty the 'message' */
            this.message = "";
            this.errorMsg =
              "Error adding category, check input fields and try again - only a-z allowed.";
          });
      } else {
        this.errorMsg =
          "Category name must be 3 character or more - only a-z allowed.";
      }
    },
    async deleteCategory(id) {
      if (this.confirmDelete()) {
        const resp = await axios(
          "http://localhost:8000/api/deletecategories/" + id,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        const data = resp.data;
        this.getCategories();
      } else {
        alert("The supplier is NOT deleted!!");
      }
    },
    /* confirm deletion method */
    confirmDelete() {
      let userselection = confirm(
        "This category doesn't contain any products & you want to delete this category permanently?"
      );

      if (userselection == true) {
        alert("Category deleted!");
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    this.getCategories();

    if (!this.token) {
      this.$router.push({ name: "login" });
      alert("You have to login to access this page.");
    }
  },
};
</script>

<template>
  <div class="col-span-12 md:col-span-12 main-content pl-2">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
    >
      <h1 class="m-4">Edit Category: <strong>{{ category.name }}</strong></h1>

      <div class="w-full max-w-lg">
        <form
          @submit.prevent="updateCategory(id)"
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
              v-model="category.name"
            />
          </div>

          <div class="flex items-center justify-between">
            <input
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 leading-tight uppercase px-3 rounded focus:outline-none focus:shadow-outline text-sm"
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
      <section class="lg:w-3/6">
        <p class="text-center text-gray-500 text-m">
          *To update the category, enter information that you want to submit to
          the category, then press Update. If category updated successfully you
          will be redirected to categories page summary.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Sidebar from "../../components/Sidebar.vue";
import ShowCategories from "../../components/Category-com/ShowCategories.vue";

export default {
  data() {
    return {
      token: localStorage.getItem("token"),
      category: [],
      message: "",
      errorMsg: "",
    };
  },
  components: {
    Sidebar,
    ShowCategories,
  },
  methods: {
    async getCategory() {
      const id = this.$route.params.id;
      await axios
        .get("http://localhost:8000/api/getcategories/" + id)
        .then((response) => {
          this.category = response.data;
        })
        .catch((error) => {
          this.errorMsg = "Couldn't load categories!";
        });
    },
    updateCategory() {
      if (this.category.name.length > 2) {
        const id = this.$route.params.id;
        axios
          .put(
            "http://localhost:8000/api/updatecategories/" + id,
            this.category,
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`,
              },
            }
          )
          .then((response) => {
            this.message = "Updated successfully";
            (this.errorMsg = ""), (this.form = {});
            setTimeout(() => this.$router.push({ path: "/categories" }), 2000);
          })
          .catch((error) => {
            /* empty the 'message' */
            this.message = "";
            this.errorMsg = "Update failed, check input fields and try again - only a-z allowed.";
          });
      } else {
        this.errorMsg =
          "Category name must be 3 character or more - only a-z allowed.";
      }
    },
  },
  mounted() {
    this.getCategory();

    if (!this.token) {
      this.$router.push({ name: "login" });
      alert("You have to login to access this page.");
    }
  },
};
</script>

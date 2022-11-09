<template>
  <div class="col-span-12 md:col-span-12 main-content pl-2">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
    >
      <h1 class="m-4">
        Edit supplier: <strong>{{ suppliers.name }}</strong>
      </h1>

      <div class="w-full max-w-lg">
        <form
          @submit.prevent="updateSupplier(id)"
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
              v-model="suppliers.name"
            />
          </div>
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="name"
            >
              E-mail
            </label>
            <input
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="example@outlook.com"
              v-model="suppliers.email"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="phone"
            >
              Phone
            </label>
            <input
              required
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="phone"
              placeholder="+46"
              v-model="suppliers.phone"
            />
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
        <p class="text-center text-gray-500 text-xs"></p>
      </div>
      <section class="lg:w-3/6 mb-12 mt-2">
        <p class="text-center text-gray-500 text-m">
          *To update the supplier, enter information that you want to submit to
          the supplier, then press Update. If supplier updated successfully you
          will be redirected to suppliers page summary. <strong>Note</strong> that 'name' needs to be minimum 3 characters long and phone number has to be numeric.
        </p>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Sidebar from "../../components/Sidebar.vue";
import ShowSuppliers from "../../components/Supplier-com/ShowSuppliers.vue";

export default {
  data() {
    return {
      token: localStorage.getItem("token"),
      suppliers: [],
      message: "",
      errorMsg: "",
    };
  },
  components: {
    Sidebar,
    ShowSuppliers,
  },
  methods: {
    async getSupplier() {
      const id = this.$route.params.id;
      await axios
        .get("http://localhost:8000/api/getsuppliers/" + id)
        .then((response) => {
          this.suppliers = response.data;
        })
        .catch((error) => {
          this.errorMsg = "Couldn't load suppliers!";
        });
    },
    updateSupplier() {
      if (this.suppliers.name.length > 2) {
        if (this.suppliers.phone.length > 5) {
          const id = this.$route.params.id;
          axios
            .put(
              "http://localhost:8000/api/updatesuppliers/" + id,
              this.suppliers,
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
              setTimeout(() => this.$router.push({ path: "/suppliers" }), 2000);

              /* this.form = {}; */
            })
            .catch((error) => {
              this.message = "";
              this.errorMsg = "Update failed, check inputs and try again!";
            });
        } else {
          this.message = "";
          this.errorMsg = "Phone number must be atleast 6 digits.";
        }
      } else {
        this.message = "";
        this.errorMsg = "Supplier name must be 3 character or more.";
      }
    },
  },
  mounted() {
    this.getSupplier();

    if (!this.token) {
      this.$router.push({ name: "login" });
      alert("You have to login to access this page.");
    }
  },
};
</script>

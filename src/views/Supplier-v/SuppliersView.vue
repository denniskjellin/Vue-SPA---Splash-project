<template>
  <div class="col-span-12 md:col-span-12 main-content pl-2">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0"
    >
      <h1 class="m-4">Suppliers page</h1>
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
            >Add Supplier</span
          >
        </label>
      </section>

      <!-- this form is hidden by default -->
      <div id="toggleForm" class="w-full max-w-lg hidden">
        <!-- submit prevent for adding supplier @form -->
        <form
          @submit.prevent="addSupplier"
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
              type="email"
              placeholder="example@outlook.com"
              v-model="form.email"
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
              v-model="form.phone"
            />
          </div>
          <!-- submit button -->
          <div class="flex items-center justify-between">
            <input
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline leading-tight uppercase px-3 text-sm"
              type="submit"
              value="Add supplier"
            />
          </div>
        </form>
        <!-- informative text-section for user -->
        <section class="mb-4 mt-1">
          <p class="text-center text-gray-500 text-m">
            *To submit a supplier enter the information you want to add, then
            press submit button to store it. If you want to edit or delete a
            supplier you can select the supplier you want to handle below.
            <strong>Note</strong> that 'name' needs to be minimum 3 characters
            long and phone number has to be numeric.
          </p>
        </section>
      </div>
      <section class="lg:w-3/6 mb-12 mt-1">
        <p class="text-center text-gray-500 text-m mt-2">
          Click on <strong>e-mail</strong> or <strong>phone</strong> link to
          open up in new window.
        </p>
      </section>
    </div>
    <!-- container, suppliers is looped out from a component -->
    <div class="grid grid-cols-12">
      <!-- loop out suppliers  -->
      <ShowSuppliers
        @deleteSupplier="deleteSupplier(supplier.id)"
        @editSupplier="editSupplier(supplier.id)"
        v-for="supplier in suppliers"
        :supplier="supplier"
        :key="supplier.id"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Sidebar from "../../components/Sidebar.vue";
import ShowSuppliers from "../../components/Supplier-com/ShowSuppliers.vue";
import router from "../../router";

export default {
  data() {
    return {
      /* data containers */
      token: localStorage.getItem("token"),
      form: {
        name: "",
        email: "",
        phone: "",
      },
      suppliers: [],
      message: "",
      errorMsg: "",
    };
  },
  components: {
    Sidebar,
    ShowSuppliers,
  },
  /* methods created to handle requests */
  methods: {
    editSupplier(id) {
      router.push("supplier/" + id);
    },
    /* method for show/hide form */
    toggleForm() {
      let toggleBtn = document.querySelector("#toggleForm");
      toggleBtn.classList.toggle("block");
      toggleBtn.classList.toggle("hidden");
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
    addSupplier() {
      if (this.form.name.length > 2) {
        if (this.form.phone.length > 5) {
          axios
            .post("http://localhost:8000/api/addsuppliers", this.form, {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`,
              },
            })
            .then((response) => {
              if (response.status === 201) {
                this.message = "Supplier added successfully!";
                this.form = {};
                /* if added successfully - empty the errorMsg from the screen */
                this.errorMsg = "";
                this.getSuppliers();
              }
            })
            .catch((error) => {
              /* empty the 'message' */
              this.message = "";
              this.errorMsg =
                "Couldn't add suppliers, check input fields and try again.";
            });
        } else {
          this.errorMsg = "Phone number must be atleast 6 digits.";
        }
        /*  */
      } else {
        this.errorMsg = "Supplier name must be 3 character or more.";
      }
    },
    async deleteSupplier(id) {
      if (this.confirmDelete()) {
        const resp = await axios(
          "http://localhost:8000/api/deletesuppliers/" + id,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${this.token}`,
            },
          }
        );
        const data = resp.data;
        this.getSuppliers();
      } else {
        alert("The supplier is NOT deleted!!");
      }
    },
    /* confirm deletion method */
    confirmDelete() {
      let userselection = confirm(
        "Are you sure you want to delete this supplier permanently?"
      );

      if (userselection == true) {
        alert("Supplier deleted!");
        return true;
      } else {
        return false;
      }
    },
  },
  /* mounted methods to run on init */
  mounted() {
    this.getSuppliers();
    /* check of user is logged in and have access */
    if (!this.token) {
      this.$router.push({ name: "login" });
      /* alert if user is not logged in */
      alert("You have to login to access this page.");
    }
  },
};
</script>

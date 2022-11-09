<template>
  <!-- Register component -->
  <section class="col-span-12">
    <div
      class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0"
    >
      <div
        class="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-gray-200"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"
          >
            Register user
          </h1>

          <!-- OK message output -->
          <div v-if="message">
            <p class="text-green-700" v-html="message"></p>
          </div>
          <!-- error msg output -->
          <div class="text-red-700 mb-2" v-if="errorMsg">
            <p v-html="errorMsg"></p>
          </div>
          <!-- form for entering data to DB -->
          <form class="space-y-4 md:space-y-6" method="POST" action="#">
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Name</label
              >
              <input
                type="text"
                name="name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Name"
                v-model="form.name"
              />
            </div>
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900"
                >E-mail</label
              >
              <input
                type="email"
                name="email"
                id="email"
                autocomplete="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="name@outlook.com"
                v-model="form.email"
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900"
                >Password</label
              >
              <input
                type="password"
                name="password"
                id="password"
                autocomplete="current-password"
                placeholder="••••••••"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                v-model="form.password"
              />
            </div>

            <button
              @click.prevent="register"
              type="submit"
              class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
/* axios */
import axios from "axios";
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      message: "",
      errorMsg: "",
    };
  },
  methods: {
    /* when submit is clicked, trigger save form */
    register() {
      if (this.form.name.length > 2) {
        if (this.form.password.length > 6) {
      /* axios method */
      axios
        .post("http://localhost:8000/api/register", this.form)
        .then((response) => {
          this.message =
            "User registrated! <a class='text-blue-700' href='/login'>Go to login page</a>";
            this.errorMsg = ""
        })
        .catch((error) => {
          this.errorMsg = "User couldn't be registrated, E-mail already in use.";
        });

      } else {
        this.errorMsg = "Password must be 8 character or more.";
      }

      } else {
        this.errorMsg = "Name must be 3 character or more.";
      }
    },
  },
};
</script>

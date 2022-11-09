<!-- login component -->
<template>
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
            Login user
          </h1>
          <div v-if="message">
            <p v-html="message"></p>
          </div>
          <!-- form for entering data to DB -->
          <form class="space-y-4 md:space-y-6" action="#">
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
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <a
                  href="#"
                  class="text-sm font-medium text-primary-600 hover:underline"
                  >Forgot password?</a
                >
              </div>
            </div>
            <button
              @click.prevent="loginUser"
              type="submit"
              class="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Sign in
            </button>
            <p class="text-sm font-light text-gray-500">
              Don't have an account?
            </p>
            <RouterLink to="/register">
              <p class="font-medium text-primary-600 hover:underline"></p>
              Register now
            </RouterLink>
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
  /* data export, names for storage variabels */
  data() {
    return {
      /* form objecy */
      form: {
        /* reactive data variables */
        email: "",
        password: "",
      },
      message: "",
    };
  },
  methods: {
    /* method for login in */
    loginUser() {
      /* url for request */
      axios
        .post("http://localhost:8000/api/login", this.form)
        .then((response) => {
          if (response.status === 200) {
            /* handle the token and store it */
            var token = response.data.token;
            localStorage.setItem("token", token);
            /* if success, router user to dashboard */
            this.$router.push({ name: "dashboard" });
          }
          /* if invalid, show this messege */
        })
        .catch((response) => {
          this.message =
            "<p class='text-red-500'>Wrong e-mail or password!</p>";
        });
    },
  },
};
</script>

<style></style>

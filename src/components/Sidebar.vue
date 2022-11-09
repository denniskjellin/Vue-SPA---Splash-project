<template>
  <div class="col-span-1 lg:col-span-2">
    <div class="absolute flex min-h-screen">
      <!-- sidebar -->
      <div
        class="text-gray-200 w-52 space-y-6 pl-3 py-6 absolute inset-y-0 left-0 lg:relative lg:-translate-x-0 transform -translate-x-full transition duration-200 ease-in-out bg-gray-800"
        :class="{ 'relative -translate-x-0': showSidebar }"
      >
        <a href="" class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
              clip-rule="evenodd"
            />
          </svg>

          <span
            class="text-2xl font-extrabold text-white space-x-2 px-2 hover:text-blue-300"
            ><RouterLink to="/">Dashboard</RouterLink></span
          >
        </a>
        <nav>
          <RouterLink
            to="/suppliers"
            class="flex items-center space-x-2 py-3 px-4 hover:bg-gray-700 rounded hover:text-blue-300"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
            Suppliers</RouterLink
          >
          <RouterLink
            to="/categories"
            class="flex items-center space-x-2 py-3 px-4 hover:bg-gray-700 rounded hover:text-blue-300"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
            Categories</RouterLink
          >
          <RouterLink
            to="/products"
            class="flex items-center space-x-2 py-3 px-4 hover:bg-gray-700 rounded hover:text-blue-300"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
            Products</RouterLink
          >

          <button
            class="bg-red-700 flex items-center space-x-2 py-2 px-3 hover:bg-green-700 rounded mt-16 ml-0"
            @click.prevent="logout"
          >
            Logout</button
          ><br /><br />
        </nav>
      </div>
      <div class="flex-1">
        <div class="bg-white shadow px-2 py-4 lg:hidden">
          <button class="lg:hidden" @click="showSidebar = !showSidebar">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const showSidebar = ref(false);

    return {
      showSidebar,
    };
  },

  /* logout */
  data() {
    return {
      /* get token */
      token: localStorage.getItem("token"),
    };
  },
  methods: {
    logout() {
      let url = "http://localhost:8000/api/";

      fetch(url + "logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + this.token,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          /* remove token */
          localStorage.removeItem("token");
          this.$router.push({ name: "login" });
        })
        .catch((err) => {
          /* remove token */
          localStorage.removeItem("token");
          /* reroute to login */
          this.$router.push({ name: "login" });
        });
    },
  },
};
</script>

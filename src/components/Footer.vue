<template>
  <footer>
    <div class="p-10 bg-gray-800 text-gray-200">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          <div class="mb-5">
            <h4 class="text-lg font-bold pb-4">Splash</h4>
            <p class="text-gray-400">
                <address class="text-gray-400">
Written by <a href="mailto:dekj2100@student.miun.se">Dennis Kjellin</a>.<br>
Visit us at:<br>
Example.com<br>
Box 1337, Awesometown<br>
SWE
</address>
            </p>
          </div>
          <div class="mb-5">
            <h4 class="text-lg font-bold">Useful Links</h4>
            <ul class="text-gray-400">
              <li class="pb-3 list-none hover:text-cyan-500 duration-500">
                <i class="fa fa-chevron-right mr-1"></i
                ><RouterLink to="/">Dashboard</RouterLink>
              </li>
              <li class="pb-3 list-none hover:text-cyan-500 duration-500">
                <i class="fa fa-chevron-right mr-1"></i
                ><RouterLink to="/products">Products</RouterLink>
              </li>
              <li class="pb-3 list-none hover:text-cyan-500 duration-500">
                <i class="fa fa-chevron-right mr-1"></i
                ><RouterLink to="/suppliers">Suppliers</RouterLink>
              </li>
              <li class="pb-3 list-none hover:text-cyan-500 duration-500">
                <i class="fa fa-chevron-right mr-1"></i
                ><RouterLink to="/categories">Categories</RouterLink>
              </li>
            </ul>
          </div>
          <div class="mb-5">
            <h4 class="text-lg font-bold">User</h4>
            <ul class="text-gray-400">
              <li class="pb-3 list-none hover:text-cyan-500 duration-500">
                <i class="fa fa-chevron-right mr-1"></i
                ><RouterLink to="/register">Register</RouterLink><br />
              </li>
              <li class="pb-3 list-none hover:text-cyan-500 duration-500">
                <i class="fa fa-chevron-right mr-1"></i
                ><RouterLink to="/login">Login</RouterLink>
              </li>
            </ul>
          </div>
          <div class="mb-5">
            <h4 class="text-lg font-bold">Don't miss any news!</h4>
            <p class="text-gray-400 pb-2">sign up for newsletter</p>
            <form class="flex flex-row flex-wrap">
              <input
                type="text"
                class="text-gray-400 w-2/3 p-2 focus:border-cyan-400 rounded-sm"
                placeholder="email@example.com"
              />
              <button
                class="p-2 w-1/3 bg-blue-500 text-white hover:bg-blue-600"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full bg-gray-900 text-gray-400 px-10">
      <div
        class="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center"
      >
        <div class="text-center">
          <div>
            Copyright <strong><span>Splash</span></strong
            >. All rights Reserved
          </div>
          <div>
            Dessigned with <strong class="text-cyan-500">Tailwind CSS</strong>
          </div>
        </div>
        <div class="text-center text-xl text-white mb-2">
          <a
            href="#"
            class="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 mx-1 inline-block pt-1"
            ><i class="fa fa-twitter"></i
          ></a>
          <a
            href="#"
            class="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 mx-1 inline-block pt-1"
            ><i class="fa fa-facebook"></i
          ></a>
          <a
            href="#"
            class="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 mx-1 inline-block pt-1"
            ><i class="fa fa-instagram"></i
          ></a>
          <a
            href="#"
            class="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 mx-1 inline-block pt-1"
            ><i class="fa fa-skype"></i
          ></a>
          <a
            href="#"
            class="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 mx-1 inline-block pt-1"
            ><i class="fa fa-linkedin"></i
          ></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "Footer",
};
</script>

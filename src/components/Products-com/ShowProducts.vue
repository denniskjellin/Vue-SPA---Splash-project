<!-- Show products component -->
<template>
    <div class="md:col-span-4 lg:col-span-3 col-span-12 md:p-2 mt-3">
      <section
        class="w-fit break-all box-border block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-2xl hover:bg-blue-100 min-h-full"
      >
        <h5
          class="mb-2 text-xl tracking-tight text-gray-900 dark:text-white"
        >
          {{ product.name }}
        </h5>
    <img class="max-h-60 mb-2"
    :src="product.image_url">
        <p class="font-normal text-gray-700 dark:text-gray-400">
        <strong>Supplier:</strong> {{ product.supplier_name }}
      </p>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        <strong>Category:</strong> {{ product.category_name }}
      </p>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        <strong>Amount:</strong> {{ product.amount }} st
      </p>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        <strong>Price:</strong> <span class="float-right"></span>{{ product.price }} kr
      </p>
     
      <p class="font-normal text-gray-700 dark:text-gray-400 mb-2">
        <strong>Info: </strong>{{ product.info }}
      </p>
        <p class="font-normal text-gray-700 dark:text-gray-400"></p>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded focus:outline-none focus:shadow-outline mt-1 mr-6 leading-tight uppercase text-sm"
          type="button"
          @click="$emit('editProduct')"
        ><router-link :to="{name: 'productsdetails', params: {id: product.id}}"></router-link>
          Edit
        </button>
        <button
          class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline leading-tight uppercase px-3 text-sm"
          type="button"
          @click="$emit('deleteProduct')">Delete
        </button>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      product: Object,
    },
  };
  </script>
  
  
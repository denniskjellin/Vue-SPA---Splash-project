<!-- Show suppliers component -->
<template>
  <div class="md:col-span-6 lg:col-span-4 col-span-12 md:p-2 p-1 mt-3">
    <section
    class="w-80 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-2xl hover:bg-blue-100"
    >
      <h5
        class="mb-2 text-xl tracking-tight text-gray-900"
      >
        Supplier: {{ supplier.name }}
      </h5>
      <p class="font-normal text-gray-700">
        <!-- mailto: function on e-mail -->
        <strong class="text-gray-700">Contact:</strong> <a class="text-gray-800 hover:text-blue-600" v-bind:href="['mailto:' + supplier.email]">{{supplier.email}}</a>
      </p>
      <p class="font-normal text-gray-700">
        <strong class="text-gray-700">Call:</strong> <a class="text-gray-800 hover:text-blue-600" v-bind:href="['tel:' + supplier.phone]">{{supplier.phone}}</a>
      </p>
      <p class="font-normal text-gray-700"></p>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline mt-1 mr-6 leading-tight uppercase px-3 text-sm"
        type="button"
        @click="$emit('editSupplier')"
      ><router-link :to="{name: 'supplierdetails', params: {id: supplier.id}}"></router-link>
        Edit
      </button>
      <button
        class="bg-red-700 hover:bg-red-800 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline leading-tight uppercase px-3 text-sm"
        type="button"
        @click="$emit('deleteSupplier')">Delete
      </button>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    supplier: Object,
  },
};
</script>

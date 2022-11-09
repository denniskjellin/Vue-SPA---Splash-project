<!-- Show category component -->
<template>
  <div class="md:col-span-6 lg:col-span-4 col-span-12 md:p-2 p-1 mt-3">
    <section
      class="w-80 block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-2xl hover:bg-blue-100"
    >
      <h5 class="mb-2 text-xl tracking-tight text-gray-900">
        Category - {{ category.name }}
      </h5>

      <p class="font-normal text-gray-700 mb-2">
        Edit or delete information for category:
        <strong>{{ category.name }}</strong>
      </p>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold text-sm py-2 rounded focus:outline-none focus:shadow-outline mt-1 mr-6 leading-tight uppercase px-3"
        type="button"
        @click="$emit('editCategory')"
      >
        Edit
      </button>
      <button
        class="bg-red-700 hover:bg-red-800 text-white font-bold text-sm py-2 rounded focus:outline-none focus:shadow-outline leading-tight uppercase px-3"
        type="button"
        @click="$emit('deleteCategory')"
      >
        Delete
      </button>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    category: Object,
  },
};
</script>

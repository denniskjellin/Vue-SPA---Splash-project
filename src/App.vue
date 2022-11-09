<template>
    <!-- include header component -->
    <Header />
    <Sidebar />
    <!-- include view -->
    <main class="grid grid-cols-12 mt-8">
        <RouterView />
    </main>
    <!-- include footer -->
    <Footer />
</template>


<script>

import { RouterLink, RouterView } from 'vue-router'
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Sidebar from './components/Sidebar.vue';
export default {
    components: {
        Header,
        Footer,
        RouterView,
        Sidebar
    }
}

</script>



<style scoped>
main {
background-color: #ececec;
border-radius: 8px;
}
</style>

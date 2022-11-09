<template>
    <!-- Dashboard -->
    <Dashboard />
    
</template>

<script>
import Dashboard from "../components/Dashboard.vue";
import Sidebar from "../components/Sidebar.vue";
export default {
    components: {
       Dashboard, 
       Sidebar,
    }
}
</script>

<style>
main {
    background-color: #f1f1f1; 
}
</style>
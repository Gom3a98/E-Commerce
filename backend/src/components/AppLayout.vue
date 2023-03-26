<script setup>
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";
import {ref} from 'vue'
const sidebarOpened = ref(true);

function toggleSidebar() {
    sidebarOpened.value = !sidebarOpened.value
}

</script>

<template>
    <div class="min-h-full bg-gray-200 flex">
        <!--    Sidebar-->
        <Sidebar :class="{'-ml-[200px]': !sidebarOpened}"/>
        <!--/    Sidebar-->

        <div class="flex-1">
            <Navbar @toggle-sidebar="toggleSidebar"></Navbar>
            <!--      Content-->
            <main class="p-6">
                <router-view></router-view>
            </main>
            <!--      Content-->
        </div>
    </div>
<!--    <div class="min-h-full bg-gray-200 flex items-center justify-center">-->
<!--        <Spinner />-->
<!--    </div>-->
<!--    <Toast />-->
</template>



<style scoped>

</style>

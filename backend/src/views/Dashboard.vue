<template>
    <div class="mb-2 flex items-center justify-between">
        <h1 class="text-3xl font-semibold">Dashboard</h1>
        <div class="flex items-center">
            <label class="mr-2">Change Date Period</label>
            <CustomInput type="select" v-model="chosenDate" @change="onDatePickerChange" :select-options="dateOptions"/>
        </div>
    </div>
</template>
<script setup>
import {UserIcon} from '@heroicons/vue/24/outline'
import {computed, onMounted, ref} from "vue";
import CustomInput from "../components/core/CustomInput.vue";

import {useStore} from "vuex";
</script>

<style scoped>

</style>

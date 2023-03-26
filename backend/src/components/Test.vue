<template>
    <Dialog :showHeader="false"></Dialog>

    <!-- can be written as -->

    <Dialog :show-header="false"></Dialog>
</template>

<script>
import Dialog from "primevue/dialog"
export default {
    name: "Test",
    components : {
        Dialog
    }
}
</script>

<style scoped>

</style>

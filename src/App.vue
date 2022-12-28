<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
    <main class="max-w-full overflow-x-hidden width-constraint">
        <RouterView />
        <Partner />
        <Footer />
    </main>
</template>

<style lang="scss" scoped></style>

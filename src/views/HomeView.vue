<script>
import TheWelcome from "../components/TheWelcome.vue";

export default {
    mounted() {
        this.$http.get("todos/1").then((json) => console.log(json));
    },
};
</script>

<template>
    <main>
        <TheWelcome />
    </main>
</template>

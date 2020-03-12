<template>
    <button class="btn btn-primary letter" @click="filterByLetter">
        {{name}}
    </button>
</template>

<script>
    export default {
        name: "Letter",

        props: {
            name
        },

        methods: {
            filterByLetter(){
                this.$emit("clickfilterbyletter");
            }
        }
    }
</script>

<style scoped>
    .letter{
        margin: 4px;
    }
</style>
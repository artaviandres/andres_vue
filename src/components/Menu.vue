<template>
    <div>
        <a href="/">home</a>
        <a href="/mywork" class="margin">my work</a>
        <a href="/contactme" class="margin">contact me</a>
    </div>
</template>

<script>
    export default {
        name: 'menu'
    }
</script>

<style scoped>
    a {
        cursor: pointer;
        text-decoration: none;
        color: inherit;
    }
    a:hover {
        text-decoration: underline;
    }
    .margin {
        margin-left: 3%;
    }
</style>
<template>
    <div>
        <a href="/">home</a>
        <a href="/mywork" class="margin">my work</a>
        <a href="/contactme" class="margin">contact me</a>
        <a href="/blog" class="margin">blog</a>
    </div>
</template>

<script>
    export default {
        name: 'MenuComponent'
    }
</script>

<style scoped>
    a {
        cursor: pointer;
        text-decoration: none;
        color: inherit;
        font-size: 16px;
    }
    a:hover {
        text-decoration: underline;
    }
    .margin {
        margin-left: 5%;
    }
</style>
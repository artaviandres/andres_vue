<template>
    <div>
        <h1>About Andrés</h1>
        <p>I'm a 20 year old Full Stack Developer, from the beautiful country of Costa Rica.</p>
        <p>Passionate about my job and writing code in general, I'm always willing to learn new languages, and start brand new shiny projects.</p>
        <hr />
        <p>I like to keep myself updated, so you'll often see me working with the latest technologies out there. Such as
            <span class="react">
                React
            </span>,
            <span class="vue">
                Vue
            </span>,
            <span class="angular">
                Angular
            </span>and many others.
        </p>
    </div>
</template>

<script>
    export default {
        name: 'home'
    }
</script>

<style scoped>
    .react {
        color: #00d8ff;
    }
    .vue {
        color: #42b883
    }
    .angular {
        color: #f44336;
    }
    h1 {
        margin-top: 12%;
    }
</style>

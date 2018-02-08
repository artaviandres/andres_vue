<template>
    <div class="footer">
        <a href="https://facebook.com/iAndrezx" target="_blank">
            <Icon>
                <icon name="facebook-square" scale="1.8" />
            </Icon>
        </a>
        <a href="https://instagram.com/artaviandres" target="_blank">
            <Icon>
                <icon name="instagram" scale="1.8" />
            </Icon>
        </a>
        <a href="https://twitter.com/Artvavia" target="_blank">
            <Icon>
                <icon name="twitter-square" scale="1.8" />
            </Icon>
        </a>
        <a href="https://www.linkedin.com/in/artaviandres/" target="_blank">
            <Icon>
                <icon name="linkedin" scale="1.8" />
            </Icon>
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=artaviandres@gmail.com" target="_blank">
            <Icon>
                <icon name="envelope" scale="1.6" />
            </Icon>
        </a>
    </div>
</template>

<script>
    import Icon from 'vue-awesome/components/Icon'
    import 'vue-awesome/icons/facebook-square'
    import 'vue-awesome/icons/instagram'
    import 'vue-awesome/icons/twitter-square'
    import 'vue-awesome/icons/linkedin'
    import 'vue-awesome/icons/envelope'

    export default {
        name: "Footer",
        components: {
            Icon
        }
    }
</script>

<style scoped>
    .footer {
        position: absolute;
        bottom: 0;
        height: 70px;
        width: 100vw;
    }

    a {
        cursor: pointer;
        margin-left: 3%;
        text-decoration: none;
        color: inherit;
    }
</style>
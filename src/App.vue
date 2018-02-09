<template>
  <div id="app">
    <Menu />
    <router-view class="container"></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer';
import Menu from './components/Menu';

export default {
  name: 'app',
  components: {
    Footer,
    Menu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  border: 1px rgba(0,0,0,0.3) solid;
  height: 50vh;
  width: 50vw;
  margin: 10vh auto 0 auto;
  padding: 1% 2% 2% 2%;
}
</style>

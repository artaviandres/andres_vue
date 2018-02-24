<template>
  <div id="app">
    <MenuComponent />
    <router-view class="container"></router-view>
    <FooterComponent />
  </div>
</template>

<script>
import FooterComponent from './components/FooterComponent';
import MenuComponent from './components/MenuComponent';

export default {
  name: 'app',
  components: {
    FooterComponent,
    MenuComponent
  }
}

//test
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
  height: 60vh;
  width: 90vw;
  margin: 9vh auto 0 auto;
  padding: 11% 2% 2% 2%;
}

@media(min-width: 420px) {
  .container {
    width: 80vw;
  }
}

@media(min-width: 950px) {
  .container {
    width: 50vw;
  }
}
</style> 

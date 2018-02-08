import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import MyWork from './MyWork.vue';
import Home from './Home.vue';
import Contact from './Contact.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/mywork', component: MyWork },
  { path: '/', component: Home },
  { path: '/contactme', component: Contact }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});

import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import App from './App.vue';
import MyWork from './MyWork.vue';
import Home from './Home.vue';
import Contact from './Contact.vue';
import Blog from './Blog.vue'

Vue.use(VueRouter);
Vue.use(VueMaterial);

const routes = [
  { path: '/mywork', component: MyWork },
  { path: '/', component: Home },
  { path: '/contactme', component: Contact },
  { path: '/blog', component: Blog }
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

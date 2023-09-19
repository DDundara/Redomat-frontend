import { createRouter, createWebHistory } from 'vue-router';
import About from './components/AboutComponent.vue';
import Service from './components/ServiceComponent.vue';
import Contact from './components/ContactComponent.vue';
import LearnMoreComponent from './components/LearnMoreComponent.vue';
import Login from './components/LoginComponent.vue';

const routes = [
  { path: '/', component: Service },       
  { path: '/about', component: About },
  { path: '/contact', component: Contact }, 
  { path: '/learn-more', component: LearnMoreComponent },
  { path: '/login', component: Login },
  ];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
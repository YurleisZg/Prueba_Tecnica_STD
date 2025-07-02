import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import NewUserComponent from '../components/NewUserComponent.vue';

const routes = [
  { path: '/', name: 'Inicio', component: HomePage },
  { path: '/nuevo', name: 'NewUser', component: NewUserComponent }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});

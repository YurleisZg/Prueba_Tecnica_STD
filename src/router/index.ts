import { createRouter, createWebHistory } from 'vue-router';
import TableComponent from '..TableComponent.vue';
import NewUserComponent from '..components/NewUserComponent.vue';

const routes = [
  { path: '/', component: TableComponent },
  { path: '/nuevo', component: NewUserComponent }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});

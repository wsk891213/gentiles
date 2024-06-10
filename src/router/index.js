import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import CafeStoryPage from '../views/CafeStoryPage.vue'
import LocationPage from '../views/LocationPage.vue'
import MenuPage from '../views/MenuPage.vue'
import SpacePage from '../views/SpacePage.vue'


const routes = [
  { path: '/', component: MainPage },
  { path: '/cafeStory-page', component: CafeStoryPage },
  { path: '/location-page', component: LocationPage },
  { path: '/menu-page', component: MenuPage },
  { path: '/space-page', component: SpacePage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
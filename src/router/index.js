import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../views/MainPage.vue'
import GenStoryPage from '../views/GenStoryPage.vue'
import LocationPage from '../views/LocationPage.vue'
import MenuPage from '../views/MenuPage.vue'
import SpacePage from '../views/SpacePage.vue'
import MenuPageSub1 from '../views/MenuPageSub1.vue'
import MenuPageSub2 from '../views/MenuPageSub2.vue'
import MenuPageSub3 from '../views/MenuPageSub3.vue'
import MenuPageSub4 from '../views/MenuPageSub4.vue'
import MenuPageSub5 from '../views/MenuPageSub5.vue'


const routes = [
  { path: '/', component: MainPage },
  { path: '/gen-story', component: GenStoryPage },
  { path: '/location', component: LocationPage },
  { path: '/menu', component: MenuPage },
  { path: '/space', component: SpacePage },
  { path: '/menu-sub1', component: MenuPageSub1 },
  { path: '/menu-sub2', component: MenuPageSub2 },
  { path: '/menu-sub3', component: MenuPageSub3 },
  { path: '/menu-sub4', component: MenuPageSub4 },
  { path: '/menu-sub5', component: MenuPageSub5 },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  }
})

export default router
import { createRouter, createWebHistory } from 'vue-router'
import IndexViewVue from '@/views/IndexView.vue'
import SignupViewVue from '@/views/SignupView.vue'
import SigninViewVue from '@/views/SigninView.vue'
import MainDashbordVue from '@/components/Dashboard/MainDashbord.vue'
import UserLayout from '@/views/layout/UserLayoutView.vue'
import HabitsViewVue from '@/views/HabitsView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexViewVue
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignupViewVue
    },
    {
      path: '/signin',
      name: 'signin',
      component: SigninViewVue
    },
    {
      path: '/user-layout',
      name: 'user-layout',
      component: UserLayout,
      children: [
        {
          path: '/maindashboard',
          name: 'maindashboard',
          component: MainDashbordVue
        },{
          path: '/habitude',
          name: 'habitude',
          component: HabitsViewVue
        }
      ]
    }
  ]
})

export default router

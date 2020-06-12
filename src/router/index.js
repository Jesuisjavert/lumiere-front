// Imports
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) return { selector: to.hash }
    if (savedPosition) return savedPosition

    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/home/Index.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/home/Index.vue'),
        },
        {
          path: 'movie',
          name: 'Movie',
          component: () => import('@/views/movie/Index.vue'),
          meta: { src: require('@/assets/auditorium-2584269.jpg') },
        },
        {
          path: 'review',
          name: 'Review',
          component: () => import('@/views/review/Index.vue'),
          meta: { src: require('@/assets/review.jpg') },
        },
        {
          path: 'signup',
          name: 'Signup',
          component: () => import('@/views/signup/Index.vue'),
          meta: { src: require('@/assets/admission-2974645.jpg') },
        },
        {
          path: '*',
          name: 'FourOhFour',
          component: () => import('@/views/404/Index.vue'),
        },
      ],
    },

  ],
})

export default router

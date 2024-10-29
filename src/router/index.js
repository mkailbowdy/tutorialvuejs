import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventDetailsView from '../views/event/DetailsView.vue'
import AboutView from '../views/AboutView.vue'
import SimpleFormView from '@/views/SimpleFormView.vue'
import RegisterView from '@/views/event/RegisterView.vue'
import EditView from '@/views/event/EditView.vue'
import LayoutView from '@/views/event/LayoutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NetworkErrorView from '@/views/NetworkErrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition)
        } else {
          resolve({ top: 0 })
        }
      }, 400) // Small delay to ensure content is loaded
    })
  },
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: (route) => ({ page: parseInt(route.query.page) || 1 }),
    },
    {
      path: '/events/:id',
      name: 'event-layout',
      props: true,
      component: LayoutView,
      children: [
        {
          path: '',
          name: 'event-details',
          component: EventDetailsView,
        },
        {
          path: 'register',
          name: 'event-register',
          component: RegisterView,
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EditView,
        },
      ],
    },
    {
      path: '/event/:afterEvent(.*)',
      redirect: (to) => {
        return { path: '/events/' + to.params.afterEvent }
      },
    },
    // {
    //   path: '/event/:id',
    //   redirect: () => {
    //     return { name: 'event-details' }
    //   },
    //   children: [
    //     { path: 'register', redirect: () => ({ name: 'event-register' }) },
    //     { path: 'edit', redirect: () => ({ name: 'event-edit' }) },
    //   ],
    // },

    {
      path: '/about-us',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/about',
      redirect: { name: 'about' },
    },
    {
      path: '/form',
      name: 'form',
      component: SimpleFormView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFoundView,
    },
    {
      path: '/404/:resource',
      name: '404Resource',
      component: NotFoundView,
      props: true,
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkErrorView,
    },
  ],
})

export default router

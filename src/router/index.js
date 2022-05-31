import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import EventDetailsView from '../views/EventDetailsView'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventListView,
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    component: EventDetailsView,
    props: true,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router

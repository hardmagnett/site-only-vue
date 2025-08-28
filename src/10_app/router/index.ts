import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/20_pages/MainPage'),
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/20_pages/ProjectsPage'),
  },
  {
    path: '/projects/:projectSlug',
    name: 'project',
    component: () => import('@/20_pages/ProjectsPage'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/20_pages/NotFoundPage'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router

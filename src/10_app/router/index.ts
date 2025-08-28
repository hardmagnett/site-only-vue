import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import { setMetaTags } from '@/60_shared/lib/metaTags'
import {
  pageMain,
  pageAbout,
  pageProjects
} from '@/70_content/singularPages/';
import { getProjectMiddleware } from '@/20_pages/ProjectPage'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/20_pages/MainPage'),
    beforeEnter: () => setMetaTags(pageMain.meta),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/20_pages/AboutPage'),
    beforeEnter: () => setMetaTags(pageAbout.meta),
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/20_pages/ProjectsPage'),
    beforeEnter: () => setMetaTags(pageProjects.meta),
  },
  {
    path: '/projects/:projectSlug',
    name: 'project',
    component: () => import('@/20_pages/ProjectPage'),
    beforeEnter: getProjectMiddleware,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/20_pages/NotFoundPage'),
    beforeEnter: () => setMetaTags({
      title: 'Страница не найдена',
      description: 'Страница не найдена',
    }),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

// router.beforeEach(metaMiddleware)

export default router

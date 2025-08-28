import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import metaMiddleware from '@/10_app/router/middleware/metaMiddleware'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/20_pages/MainPage'),
    meta: {
      title: 'ТИТЛ Главная',
      description: 'Деск Главная',
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/20_pages/AboutPage'),
    meta: {
      title: 'ТИТЛ Обо мне',
      description: 'Деск Обо мне',
    }
  },
  {
    path: '/projects',
    name: 'projects',
    component: () => import('@/20_pages/ProjectsPage'),
    meta: {
      title: 'ТИТЛ Проекты',
      description: 'Деск Проекты',
    }
  },
  {
    path: '/projects/:projectSlug',
    name: 'project',
    component: () => import('@/20_pages/ProjectPage'),
    meta: {
      title: 'ТИТЛ Проект',
      description: 'Деск проект',
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/20_pages/NotFoundPage'),
    meta: {
      title: 'Страница не найдена',
      description: 'Страница не найдена',
    }
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

router.beforeEach(metaMiddleware)

export default router

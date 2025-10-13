import './10_app/styles/main.css'

import { createApp } from 'vue'
import App from './10_app/App.vue'
import router from './10_app/router'
import markdownit from 'markdown-it'
import Breakpoints from '@/10_app/stores/breakpoints.ts'

const app = createApp(App)


app.config.globalProperties.$md = markdownit()


const breakpoints: Breakpoints = new Breakpoints()
// console.log(breakpoints.isSmOrMore); console.log('^...breakpoints.isSmOrMore:')
// Для использования в шаблоне: {{ $breakpoints.isMdOrMore }}
app.config.globalProperties.$breakpoints = breakpoints;
// Для использования в скрипте: const $breakpoints = inject('$breakpoints');
app.provide('$breakpoints', breakpoints);

app.use(router)

app.mount('#app')

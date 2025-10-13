import './10_app/styles/main.css'

import { createApp } from 'vue'
import App from './10_app/App.vue'
import router from './10_app/router'
import markdownit from 'markdown-it'
// import Breakpoints from '@/10_app/stores/breakpoints.ts'
import breakpoints from '@/60_shared/stores/breakpoints.ts'

const app = createApp(App)


app.config.globalProperties.$md = markdownit()

// todo:: всё что касается этих брекпоинтов - либо в гисты либо в наработки.
// В шаблоне использовать так: {{ $breakpoints.isMdOrMore.value }}
// и так <Comp v-if="$breakpoints.isMdOrMore.value" />
app.config.globalProperties.$breakpoints = breakpoints;

app.use(router)

app.mount('#app')

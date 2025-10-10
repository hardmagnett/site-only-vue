import './10_app/styles/main.css'

import { createApp } from 'vue'
import App from './10_app/App.vue'
import router from './10_app/router'
import markdownit from 'markdown-it'

const app = createApp(App)
app.config.globalProperties.$md = markdownit()

app.use(router)

app.mount('#app')

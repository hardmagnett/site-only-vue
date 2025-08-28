import { createApp } from 'vue'
import App from './10_app/App.vue'
import router from './10_app/router'

const app = createApp(App)

app.use(router)

app.mount('#app')

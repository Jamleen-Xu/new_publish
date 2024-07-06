
import { createApp } from 'vue'
import { createPinia } from 'pinia'
// pinia持久化
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import Particles from "@tsparticles/vue3";
import { loadFull } from "tsparticles";

import App from './App.vue'
import router from './router'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(ElementPlus)
app.use(pinia)
app.use(router)
app.use(Particles, {
    init: async engine => {
        await loadFull(engine)
    }
})

app.mount('#app')

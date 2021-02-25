import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import VueKinesis from 'vue-kinesis'
import D3_show from './components/D3_show.vue'
import About from './components/About.vue'
import Home from './components/Home.vue'

const routes = [
    {
        path: '/d3_show',
        component: D3_show,
    },
    {
        path: '/',
        component: Home,
    },
    {
        path: '/about',
        component: About
    },
]
const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})

const app = createApp(App);
app.use(router);
app.use(VueKinesis);
app.use(ElementPlus);
app.mount('#app');
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { gsap } from 'gsap';
import gsapPlugin from './plugin/gsap.js';
import router from "./router"

const app = createApp(App)

// composition API 全域註冊方法
// 定義 GSAP 的 provide
app.provide('$gsap', gsap)
app.use(router)
// option API 全域註冊方法
// app.config.globalProperties.$gsap = gsap;

app.mount('#app')


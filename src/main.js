import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import { gsap } from 'gsap';
import gsapPlugin from './plugin/gsap.js';


const app = createApp(App)

// composition API 全域註冊方法
// 定義 GSAP 的 provide
app.provide('$gsap', gsap)

// option API 全域註冊方法
// app.config.globalProperties.$gsap = gsap;

app.mount('#app')


import { createRouter, createWebHistory } from 'vue-router'
import Hello from '../components/HelloWorld.vue'
import Gsap from '../components/gsap.vue'
import plugin from '../components/plugin.vue'

console.log(1)
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name:"hello", // 元件呈現的名稱
      path:"/", // 對應的虛擬路徑
      component:  Hello  // 對應的元件
    },
    {
      name:"gsap", // 元件呈現的名稱
      path:"/gsap", // 對應的虛擬路徑
      component:Gsap    // 對應的元件
    },
    {
      name:"plugin", // 元件呈現的名稱
      path:"/plugin", // 對應的虛擬路徑
      component:plugin    // 對應的元件
    }
  ]
})
console.log(2)

export default router
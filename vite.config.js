import { defineConfig, loadEnv } from 'vite'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// export default defineConfig({
//   define: {
//     gsap: gsap,
//   },
//   plugins: [
//     vue(),
//     // gasp({
//     //   // GASP的配置選項
//     // }),
//   ],
// })

export default defineConfig((command, mode, ssrBulid)=>{
  console.log(command)
  console.log(mode)
  console.log(ssrBulid)

  const env = loadEnv(mode, process.cwd())
  console.log( env.VITE_BASE); //輸出VITE_BASE的環境變數
  return {
    plugins: [
      vue(),
    ],
    // 關閉 strict mode
    strict: false,
  }
})
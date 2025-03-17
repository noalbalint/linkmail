import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// TODO: alias @ imports

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  assetsInclude: ['**/*.MP4', '**/*.JPG'],
})

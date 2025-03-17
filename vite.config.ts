import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// TODO: @ import aliases to replace relative imports

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  assetsInclude: ['**/*.MP4', '**/*.JPG'],
})

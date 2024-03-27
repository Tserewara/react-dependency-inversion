import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['./*.{test,spec}.{js,tsx,ts}'],
    root: './test'
    
  },
  root: './src/presentation', // Adjust the root directory to src/presentation
  publicDir: './src/public',
  

})

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react' // Add react plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), // Use the react plugin
    tailwindcss()
  ]
})

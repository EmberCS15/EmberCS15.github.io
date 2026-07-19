import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// User site served at https://<username>.github.io, so base is root "/".
export default defineConfig({
  plugins: [react()],
  base: '/',
})

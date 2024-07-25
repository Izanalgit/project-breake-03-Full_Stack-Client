import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/project-breake-03-Full_Stack-Client",
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ['.loca.lt'], // Agrega aquí el dominio generado por LocalTunnel
  },
  plugins: [react(), tailwindcss()],
})

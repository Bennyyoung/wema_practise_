import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { UserConfig } from 'vite'

// https://vitejs.dev/config/
module.exports = defineConfig((configEnv) => {
  const config = {
    plugins: [react()],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        assets: path.resolve(__dirname, './src/assets'),
        components: path.resolve(__dirname, './src/components'),
        pages: path.resolve(__dirname, './src/pages'),
      }
    }
  }

  if (configEnv.mode === "development") {
    config.server = {
      port: 5173,
      open: true,
    }
  }

  return config

})
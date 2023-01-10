// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        raspberry_pi_project: resolve(__dirname, 'raspberry_pi_project','index.html'),
        sudoku_solver: resolve(__dirname, 'sudoku_solver','index.html'),
        billing_system: resolve(__dirname, 'billing_system','index.html'),
      },
    },
  },

  base: '/vite-website/'
})

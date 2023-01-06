// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        raspberry_pi_project: resolve(__dirname, 'project.html'),
        sudoku_solver: resolve(__dirname, 'sudoku.html'),
      },
    },
  },

  base: '/vite-website/'
})

// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        raspberryPiProject: resolve(__dirname, 'project.html'),
        sudokuSolver: resolve(__dirname, 'sudoku.html'),
      },
    },
  },

  base: '/vite-website/'
})

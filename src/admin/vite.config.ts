import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
		},
	},
	server: {
		// proxy: {
		// 	'/api': 'http://localhost:5000',
		// },
		proxy: {
			'/api': {
				target: 'http://localhost:5000',
				changeOrigin: true,
				rewrite: path => path.replace(/^\/api/, ''),
			},
		},
		// proxy: 'http://localhost:5000',
	},
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			template: { transformAssetUrls },
		}),

		quasar({
			sassVariables: 'src/quasar-variables.sass',
		}),
	],
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

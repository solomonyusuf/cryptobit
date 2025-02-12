import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-vue';
import vercel from 'vite-plugin-vercel';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [plugin(),
        vercel()
    ],
    server: {
        port: 51308,
    }
})

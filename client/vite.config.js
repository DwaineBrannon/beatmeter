import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production';

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@components': fileURLToPath(
          new URL('./src/components', import.meta.url)
        ),
        '@features': fileURLToPath(new URL('./src/features', import.meta.url)),
        '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
        '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
        '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
        '@services': fileURLToPath(new URL('./src/services', import.meta.url)),
        '@hooks': fileURLToPath(new URL('./src/hooks', import.meta.url)),
        '@config': fileURLToPath(new URL('./src/config', import.meta.url)),
      },
    },
    // Only include proxy in development
    ...(command === 'serve' && {
      server: {
        proxy: {
          '/api': {
            target: 'http://localhost:5001/beatmeter-baf5a/us-central1',
            changeOrigin: true,
            secure: false,
            rewrite: path => path.replace(/^\/api/, '/api'),
          },
        },
      },
    }),
    build: {
      outDir: 'dist',
      sourcemap: !isProduction, // Only include sourcemaps in development
      minify: isProduction ? 'esbuild' : false,
      target: 'es2015', // Ensure compatibility with older browsers
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom'],
            router: ['react-router-dom'],
            ui: ['styled-components', 'react-icons'],
            utils: ['axios'],
          },
        },
      },
      // Optimize bundle size
      chunkSizeWarningLimit: 1000,
      // Remove console logs in production
      terserOptions: isProduction
        ? {
            compress: {
              drop_console: true,
              drop_debugger: true,
            },
          }
        : {},
    },
    // Define global constants
    define: {
      __DEV__: JSON.stringify(!isProduction),
    },
  };
});

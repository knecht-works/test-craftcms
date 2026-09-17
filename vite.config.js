import tailwindcss from '@tailwindcss/vite'
import ViteRestart from 'vite-plugin-restart'

export default ({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  build: {
    manifest: true,
    outDir: './web/dist/',
    rollupOptions: {
      input: {
        app: 'src/js/app.js',
      },
    },
  },
  plugins: [
    tailwindcss(),
    ViteRestart({ reload: ['./templates/**/*'] }),
  ],
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
    cors: {
      origin: /https?:\/\/([A-Za-z0-9\-\.]+)?(localhost|\.local|\.test|\.site)(?::\d+)?$/
    },
    port: 3000,
    strictPort: true,
    // Craft's vendor/storage trees are PHP-only and irrelevant to the frontend
    // build. Watching them anyway (Vite's default watcher only skips
    // node_modules/.git) exhausts the host's inotify watch limit once vendor
    // grows past a few thousand files, crash-looping the dev server.
    watch: {
      ignored: ['**/vendor/**', '**/storage/**'],
    },
  },
})

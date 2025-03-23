import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

// Reminder: vite simply hits index.html then recursively finds all files it uses
export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [
    tailwindcss() // Daisy invoked by @plugin in style.css
  ],
});

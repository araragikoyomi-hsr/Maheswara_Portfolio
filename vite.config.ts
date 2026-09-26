import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Small assets (icons, logos) are inlined; anything larger gets a hashed file name.
    assetsInlineLimit: 2048,
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Emojipedia-Website/',  // Ensure this matches your GitHub Pages URL path
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'],  // Add .jsx to the list of extensions
  },
});

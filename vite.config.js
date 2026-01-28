import base44 from "@base44/vite-plugin"
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/rotina-procedimentos-garantedireito/',
  plugins: [
    base44({
      // Support for legacy code that imports the base44 SDK with @/integrations, @/entities, etc.
      // can be removed if the code has been updated to use the new SDK imports from @base44/sdk
      legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === 'true'
    }),
    react(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React core
          if (id.includes('node_modules/react-dom')) {
            return 'vendor-react-dom';
          }
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-router')) {
            return 'vendor-react';
          }

          // Radix UI components
          if (id.includes('node_modules/@radix-ui')) {
            return 'vendor-radix';
          }

          // UI libraries
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons';
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion';
          }
          if (id.includes('node_modules/cmdk')) {
            return 'vendor-cmdk';
          }

          // TanStack Query
          if (id.includes('node_modules/@tanstack')) {
            return 'vendor-query';
          }

          // Forms
          if (id.includes('node_modules/react-hook-form') || id.includes('node_modules/@hookform')) {
            return 'vendor-forms';
          }
          if (id.includes('node_modules/zod')) {
            return 'vendor-zod';
          }

          // Charts (recharts é grande)
          if (id.includes('node_modules/recharts') || id.includes('node_modules/d3-')) {
            return 'vendor-charts';
          }

          // Date utilities
          if (id.includes('node_modules/date-fns') || id.includes('node_modules/moment')) {
            return 'vendor-date';
          }

          // Utils
          if (id.includes('node_modules/lodash')) {
            return 'vendor-lodash';
          }
          if (id.includes('node_modules/clsx') || id.includes('node_modules/tailwind-merge') || id.includes('node_modules/class-variance-authority')) {
            return 'vendor-utils';
          }

          // PDF/Canvas
          if (id.includes('node_modules/jspdf') || id.includes('node_modules/html2canvas')) {
            return 'vendor-pdf';
          }

          // Three.js (muito grande)
          if (id.includes('node_modules/three')) {
            return 'vendor-three';
          }

          // Other UI components
          if (id.includes('node_modules/vaul') || id.includes('node_modules/sonner') || id.includes('node_modules/react-hot-toast')) {
            return 'vendor-notifications';
          }
          if (id.includes('node_modules/embla-carousel')) {
            return 'vendor-carousel';
          }
          if (id.includes('node_modules/react-day-picker')) {
            return 'vendor-datepicker';
          }
          if (id.includes('node_modules/react-resizable-panels')) {
            return 'vendor-panels';
          }
          if (id.includes('node_modules/react-quill')) {
            return 'vendor-editor';
          }
          if (id.includes('node_modules/react-markdown')) {
            return 'vendor-markdown';
          }
        },
      },
    },
    chunkSizeWarningLimit: 300,
  },
});

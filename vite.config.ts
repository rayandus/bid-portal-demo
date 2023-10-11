import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { cjsInterop } from 'vite-plugin-cjs-interop';

// To resolve runtime issue when using @emotion/styled/macro
// https://github.com/emotion-js/emotion/issues/2730#issuecomment-1340622525

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    cjsInterop({
      dependencies: ['@emotion/styled/base', '@emotion/*'],
    }),
    react({
      jsxRuntime: 'automatic',
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: [
          'babel-plugin-graphql-tag',
          'babel-plugin-macros',
          ['@emotion/babel-plugin', {}],
        ],
      },
    }),
  ],
});

import next from 'eslint-config-next/core-web-vitals';
import prettierConfig from 'eslint-plugin-prettier/recommended';

const patched = next.map((cfg) =>
  cfg.plugins && cfg.plugins['react-hooks']
    ? {
        ...cfg,
        rules: {
          ...cfg.rules,
          'no-unused-vars': 'off',
          'react-hooks/rules-of-hooks': 'error',
          'react-hooks/exhaustive-deps': 'warn',
          'react-hooks/set-state-in-effect': 'off',
        },
      }
    : cfg
);

const config = [
  {
    ignores: ['.next/**', 'node_modules/**', 'public/**', 'out/**'],
  },
  ...patched,
  prettierConfig,
];

export default config;

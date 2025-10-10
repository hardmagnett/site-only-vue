import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          // Объект ошибки принудительно передается в catch(e)
          // но далеко не всегда есть необходимость её выводить или ещё как-то использовать.
          // Можно называть переменные ошибок например ingoreErr, и тогда они не будут линтоваться.
          "caughtErrorsIgnorePattern": "^ignore",
        }
      ],
      'no-console': ["error", { allow: ["warn", "error"] }]
    },
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname, // Set the root directory for tsconfig resolution
      }
    }
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  skipFormatting,
)

import type { markdownit } from 'markdown-it'

declare module 'vue' {
  interface ComponentCustomProperties {
    $md: markdownit
  }
}

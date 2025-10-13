import type { markdownit } from 'markdown-it'
import breakpoints from '@/60_shared/stores/breakpoints.ts'

declare module 'vue' {
  interface ComponentCustomProperties {
    $md: markdownit,
    $breakpoints: typeof breakpoints
  }
}

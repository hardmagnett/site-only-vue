import type { markdownit } from 'markdown-it'
import Breakpoints from '@/60_shared/stores/breakpoints.ts'

declare module 'vue' {
  interface ComponentCustomProperties {
    $md: markdownit,
    // $breakpoints: typeof Breakpoints
    $breakpoints: Breakpoints
    // $breakpoints: string
  }
}

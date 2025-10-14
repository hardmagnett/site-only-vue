import { computed, type Ref, ref } from 'vue'
import { getValueOfCSSVariableAsNumber } from '@/60_shared/lib/DOM/getCSSVariable.ts'

let timerForTransition: number | null = null
function stopTransitionsOnDocumentResize() {
  const bodyClasses = document.body.classList
  const classToToggle = 'mod--stop-transitions'
  if (timerForTransition) {
    clearTimeout(timerForTransition)
    timerForTransition = null
  } else {
    bodyClasses.add(classToToggle)
  }
  timerForTransition = window.setTimeout(() => {
    bodyClasses.remove(classToToggle)
    timerForTransition = null
  }, 100)
}

class Breakpoints {
  private documentWidth: Ref<number>

  /**
   * Конструктор вызывается 1 раз даже при нескольких импортов разными способами. Проверено.
   */
  constructor() {
    const documentElement = document.documentElement

    this.documentWidth = ref(documentElement.clientWidth)

    window.addEventListener('resize', () => {
      stopTransitionsOnDocumentResize()

      const newVal = documentElement.clientWidth
      this.documentWidth.value = newVal
    })
  }
  private isEqualOrMoreThan = computed(() => {
    return (breakpointVariableName: string) => {
      const bpValue = getValueOfCSSVariableAsNumber(breakpointVariableName)
      const isEqualOrMoreThan = this.documentWidth.value >= bpValue
      return isEqualOrMoreThan
    }
  })
  public isMdOrMore = computed(() => this.isEqualOrMoreThan.value('--bp-md'))
  public isSmOrMore = computed(() => this.isEqualOrMoreThan.value('--bp-sm'))
  public isXsOrMore = computed(() => this.isEqualOrMoreThan.value('--bp-xs'))
}

export default new Breakpoints()

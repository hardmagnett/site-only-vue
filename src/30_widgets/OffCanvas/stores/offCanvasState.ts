import { ref } from 'vue'

export const isOffCanvasOpen = ref(false)
export const toggleOffCanvas = ()=>{
  isOffCanvasOpen.value = !isOffCanvasOpen.value
}

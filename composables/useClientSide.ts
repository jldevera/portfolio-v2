import { ref, onMounted } from 'vue'

/**
 * Composable for handling client-side functionality
 * Provides consistent client-side detection across the application
 * @returns {Object} Object containing isClient reactive reference
 */
export function useClientSide() {
  const isClient = ref(false)

  onMounted(() => {
    isClient.value = typeof window !== 'undefined'
  })

  return {
    isClient
  }
}

/**
 * Composable for creating a typing effect animation
 * @param words - Array of words to cycle through
 * @param speed - Typing speed in milliseconds
 * @param delay - Delay between words in milliseconds
 * @returns Reactive typing effect state
 */
export function useTypingEffect(words: string[], speed: number = 100, delay: number = 2000) {
  const currentWordIndex = ref(0)
  const currentText = ref('')
  const isDeleting = ref(false)
  const currentWord = computed(() => words[currentWordIndex.value])

  /**
   * Handles the typing animation logic
   */
  const type = () => {
    const word = currentWord.value
    
    if (!word) return
    
    if (isDeleting.value) {
      // Deleting effect
      currentText.value = word.substring(0, currentText.value.length - 1)
    } else {
      // Typing effect
      currentText.value = word.substring(0, currentText.value.length + 1)
    }

    let typeSpeed = speed

    if (isDeleting.value) {
      typeSpeed /= 2 // Faster deletion
    }

    if (!isDeleting.value && currentText.value === word) {
      // Word is complete, start deleting after delay
      typeSpeed = delay
      isDeleting.value = true
    } else if (isDeleting.value && currentText.value === '') {
      // Word is deleted, move to next word
      isDeleting.value = false
      currentWordIndex.value = (currentWordIndex.value + 1) % words.length
      typeSpeed = 500 // Pause before typing next word
    }

    setTimeout(type, typeSpeed)
  }

  // Start the typing effect when component mounts
  onMounted(() => {
    if (process.client) {
      setTimeout(type, 1000) // Initial delay
    }
  })

  return {
    currentText: readonly(currentText)
  }
} 
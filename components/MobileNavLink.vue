<template>
  <a
    :href="href"
    class="block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200"
    :class="[
      isActive 
        ? 'bg-primary-50 text-primary-700 border border-primary-200' 
        : 'text-text-secondary hover:bg-gray-50 hover:text-text'
    ]"
    @click="handleClick"
  >
    {{ label }}
  </a>
</template>

<script setup>
/**
 * Mobile navigation link component with smooth scrolling
 * @param {string} href - Anchor link
 * @param {string} label - Display text
 * @param {boolean} isActive - Whether this link is currently active
 */
defineProps({
  href: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

/**
 * Handles smooth scrolling to section and emits click event
 * @param {Event} event - Click event
 */
const handleClick = (event) => {
  event.preventDefault()
  const targetId = event.currentTarget.getAttribute('href')
  const targetElement = document.querySelector(targetId)
  
  if (targetElement) {
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
  
  emit('click')
}
</script> 
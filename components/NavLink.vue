<template>
  <a
    :href="href"
    class="relative px-3 py-2 text-sm font-medium transition-colors duration-200 group"
    :class="[
      isActive 
        ? 'text-primary-600' 
        : 'text-text-secondary hover:text-primary-600'
    ]"
    @click="handleClick"
  >
    {{ label }}
    <span
      v-if="isActive"
      class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/70 to-primary-500/0"
    />
    <span
      class="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary-500/0 via-primary-500/40 to-primary-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
    />
  </a>
</template>

<script setup>
/**
 * Navigation link component for smooth scrolling navigation
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

/**
 * Handles smooth scrolling to section
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
}
</script> 
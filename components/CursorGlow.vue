<template>
  <ClientOnly>
    <div 
      ref="cursorGlow"
      class="cursor-glow fixed pointer-events-none z-[-1] transition-opacity duration-300"
      :style="{
        left: cursorPosition.x + 'px',
        top: cursorPosition.y + 'px', 
        background: `radial-gradient(circle, ${glowColor}40 0%, ${glowColor}20 35%, transparent 70%)`,
        width: size + 'px',
        height: size + 'px',
        borderRadius: '50%'
      }"
    ></div>
  </ClientOnly>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue'

/**
 * CursorGlow component that creates a glowing effect following the mouse cursor
 * Uses a lighter version of the page background color for subtle integration
 * @param {string} color - The color of the glow effect (optional, defaults to background-complementary color)
 * @param {number} size - The size of the glow effect in pixels
 */
const props = defineProps({
  color: {
    type: String,
    default: '' // Empty string means use calculated background-complementary color
  },
  size: {
    type: Number,
    default: 1000
  }
})

const cursorGlow = ref(null)
const cursorPosition = ref({ x: 0, y: 0 })
const { isClient } = useClientSide()
const { glowColor: calculatedGlowColor } = useBackgroundGlow()

// Use provided color or fall back to calculated background-complementary color
const glowColor = ref(props.color || calculatedGlowColor.value)

/**
 * Updates the cursor position based on mouse movement
 * @param {MouseEvent} e - The mouse event
 */
const updateCursorPosition = (e) => {
  if (!isClient.value) return
  
  cursorPosition.value = {
    x: e.clientX - (props.size / 2),
    y: e.clientY - (props.size / 2)
  }
}

/**
 * Hides the cursor glow when mouse leaves the window
 */
const handleMouseLeave = () => {
  if (cursorGlow.value && isClient.value) {
    cursorGlow.value.style.opacity = '0'
  }
}

/**
 * Shows the cursor glow when mouse enters the window
 */
const handleMouseEnter = () => {
  if (cursorGlow.value && isClient.value) {
    cursorGlow.value.style.opacity = '1'
  }
}

/**
 * Changes the glow color dynamically
 * @param {string} newColor - The new color for the glow effect
 */
const changeGlowColor = (newColor) => {
  glowColor.value = newColor
}

// Expose the changeGlowColor method to parent
defineExpose({
  changeGlowColor
})

onMounted(async () => {
  // Wait for the next tick to ensure DOM is ready
  await nextTick()
  
  if (isClient.value) {
    // Add event listeners
    document.addEventListener('mousemove', updateCursorPosition)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
    
    // Set initial position to center of screen
    cursorPosition.value = {
      x: window.innerWidth / 2 - (props.size / 2),
      y: window.innerHeight / 2 - (props.size / 2)
    }
  }
})

onUnmounted(() => {
  if (isClient.value) {
    // Remove event listeners
    document.removeEventListener('mousemove', updateCursorPosition)
    document.removeEventListener('mouseleave', handleMouseLeave)
    document.removeEventListener('mouseenter', handleMouseEnter)
  }
})
</script>

<style scoped>
/* Hide cursor glow on mobile/touch devices */
@media (hover: none) and (pointer: coarse) {
  .cursor-glow {
    display: none !important;
  }
}

/* Ensure smooth transitions */
.cursor-glow {
  transition: opacity 0.3s ease-in-out;
  mix-blend-mode: screen;
  filter: blur(1px);
}
</style> 
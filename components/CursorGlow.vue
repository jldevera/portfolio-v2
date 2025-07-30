<template>
  <div 
    ref="cursorGlow"
    class="cursor-glow fixed pointer-events-none z-[-1]"
    :style="{
      left: cursorPosition.x + 'px',
      top: cursorPosition.y + 'px', 
      background: `radial-gradient(circle, ${glowColor}33 0%, ${glowColor}11 35%, transparent 70%)`,
    }"
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Props for customizable glow color
const props = defineProps({
  color: {
    type: String,
    default: '#FFC857' // Default to your theme color
  },
  size: {
    type: Number,
    default: 1
  }
})

const cursorGlow = ref(null)
const cursorPosition = ref({ x: 0, y: 0 })
const glowColor = ref('#21325c')

// Update cursor position
const updateCursorPosition = (e) => {
  cursorPosition.value = {
    x: e.clientX - (props.size / 2),
    y: e.clientY - (props.size / 2)
  }
}

// Hide cursor glow when leaving window
const handleMouseLeave = () => {
  if (cursorGlow.value) {
    cursorGlow.value.style.opacity = '0'
  }
}

// Show cursor glow when entering window
const handleMouseEnter = () => {
  if (cursorGlow.value) {
    cursorGlow.value.style.opacity = '1'
  }
}

// Change glow color (can be called from parent component)
const changeGlowColor = (newColor) => {
  glowColor.value = newColor
}

// Expose the changeGlowColor method to parent
defineExpose({
  changeGlowColor
})

onMounted(() => {
  if (process.client) {
    document.addEventListener('mousemove', updateCursorPosition)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)
  }
})

onUnmounted(() => {
  if (process.client) {
    document.removeEventListener('mousemove', updateCursorPosition)
    document.removeEventListener('mouseleave', handleMouseLeave)
    document.removeEventListener('mouseenter', handleMouseEnter)
  }
})
</script>

<style scoped>
.cursor-glow {
  width: v-bind(size + 'px');
  height: v-bind(size + 'px');
  border-radius: 50%;
}

/* Hide cursor glow on mobile/touch devices */
@media (hover: none) and (pointer: coarse) {
  .cursor-glow {
    display: none;
  }
}
</style> 
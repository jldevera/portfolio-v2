import { ref, computed } from 'vue'

/**
 * Composable for generating background-complementary glow colors
 * Calculates lighter versions of the page background for subtle cursor effects
 * @returns {Object} Object containing calculated glow colors
 */
export function useBackgroundGlow() {
  // Base background colors from the CSS
  const baseBackgroundColors = {
    primary: '#0f172a',    // Darkest part of gradient
    secondary: '#1e293b',  // Lighter part of gradient
  }

  /**
   * Lightens a hex color by a specified percentage
   * @param {string} hex - Hex color string
   * @param {number} percent - Percentage to lighten (0-100)
   * @returns {string} Lightened hex color
   */
  const lightenColor = (hex: string, percent: number): string => {
    // Remove # if present
    hex = hex.replace('#', '')
    
    // Parse RGB values
    const r = parseInt(hex.substr(0, 2), 16)
    const g = parseInt(hex.substr(2, 2), 16)
    const b = parseInt(hex.substr(4, 2), 16)
    
    // Calculate lighter values
    const factor = 1 + (percent / 100)
    const newR = Math.min(255, Math.round(r * factor))
    const newG = Math.min(255, Math.round(g * factor))
    const newB = Math.min(255, Math.round(b * factor))
    
    // Convert back to hex
    return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`
  }

  /**
   * Calculates the optimal glow color based on background
   * Uses a blend of both background colors for better integration
   */
  const glowColor = computed(() => {
    // Create a blend of both background colors, then lighten
    const blendedColor = lightenColor(baseBackgroundColors.secondary, 30)
    return blendedColor
  })

  /**
   * Alternative glow colors for different effects
   */
  const alternativeGlowColors = computed(() => ({
    subtle: lightenColor(baseBackgroundColors.secondary, 20),
    medium: lightenColor(baseBackgroundColors.secondary, 40),
    bright: lightenColor(baseBackgroundColors.secondary, 60),
    accent: '#475569' // Slate-600 for accent glow
  }))

  return {
    glowColor,
    alternativeGlowColors,
    lightenColor
  }
}

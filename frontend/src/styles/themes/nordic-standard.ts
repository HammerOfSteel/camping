// Nordic Standard Theme
// Forest Green, Nordic Blue, Cream, Warm Brown
// Peaceful, recommended, authentic Lits vibe

export const nordicStandard = {
  name: 'nordic-standard',
  label: 'Nordic Standard',
  description: 'Peaceful Nordic aesthetic - Forest Green, Nordic Blue, Cream',
  colors: {
    // Primary colors
    primary: {
      forestGreen: '#2D5016',
      nordicBlue: '#1B5E7F',
      cream: '#F7F5F0',
      warmBrown: '#6B4423',
    },
    // Secondary colors
    secondary: {
      sageGreen: '#9CAF88',
      softGold: '#C9A876',
      deepCharcoal: '#3A3A3A',
      lightGray: '#E8E8E8',
    },
    // Accent colors
    accent: {
      sunriseOrange: '#E8814F',
      waterBlue: '#4A9FBE',
    },
    // Semantic colors
    semantic: {
      success: '#22c55e',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    },
  },
  tailwind: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ed',
          100: '#dce5d6',
          200: '#c5d3bb',
          300: '#a8b89a',
          400: '#8fa379',
          500: '#6B8558',
          600: '#4f7d45',
          700: '#2D5016',
          800: '#1f3a10',
          900: '#142608',
        },
        secondary: {
          50: '#f5f8f5',
          100: '#e8eff1',
          200: '#d4dee8',
          300: '#99b5cf',
          400: '#4a9fbe',
          500: '#2E7FA4',
          600: '#1B5E7F',
          700: '#0f3a4f',
          800: '#0a2535',
          900: '#061820',
        },
        accent: {
          50: '#fef7f4',
          100: '#fde8de',
          200: '#fcc9b8',
          300: '#fab599',
          400: '#f5956e',
          500: '#E8814F',
          600: '#d6673e',
          700: '#b8502f',
          800: '#9a4127',
          900: '#7a311f',
        },
      },
    },
  },
} as const;

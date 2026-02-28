// Adventure Bold Theme
// Vibrant, energetic Scandinavian adventure aesthetic
// More saturated colors, adventure-focused

export const adventureBold = {
  name: 'adventure-bold',
  label: 'Adventure Bold',
  description: 'Vibrant adventure aesthetic - Bold oranges, deep blues, energetic palette',
  colors: {
    // Primary colors
    primary: {
      forestGreen: '#1a5d3e',
      nordicBlue: '#0d47a1',
      cream: '#fefdfb',
      warmBrown: '#5d4037',
    },
    // Secondary colors
    secondary: {
      sageGreen: '#81c784',
      softGold: '#ffb74d',
      deepCharcoal: '#212121',
      lightGray: '#e0e0e0',
    },
    // Accent colors - more vibrant
    accent: {
      sunriseOrange: '#ff6f3c',
      waterBlue: '#00acc1',
    },
    // Semantic colors
    semantic: {
      success: '#1b5e20',
      warning: '#e65100',
      error: '#c62828',
      info: '#1565c0',
    },
  },
  tailwind: {
    extend: {
      colors: {
        primary: {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#7ec88d',
          400: '#5db96d',
          500: '#4caf50',
          600: '#43a047',
          700: '#2e7d32',
          800: '#1b5e20',
          900: '#0d3818',
        },
        secondary: {
          50: '#e3f2fd',
          100: '#bbdefb',
          200: '#90caf9',
          300: '#64b5f6',
          400: '#42a5f5',
          500: '#2196f3',
          600: '#1e88e5',
          700: '#1565c0',
          800: '#0d47a1',
          900: '#051c7e',
        },
        accent: {
          50: '#fff3e0',
          100: '#ffe0b2',
          200: '#ffcc80',
          300: '#ffb74d',
          400: '#ffa726',
          500: '#ff9800',
          600: '#fb8c00',
          700: '#f57c00',
          800: '#e65100',
          900: '#bf360c',
        },
      },
    },
  },
} as const;

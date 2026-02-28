// Nordic Minimal Theme
// Lighter, softer Scandinavian minimalism
// Clean, airy, modern approach

export const nordicMinimal = {
  name: 'nordic-minimal',
  label: 'Nordic Minimal',
  description: 'Light Scandinavian minimalism - Clean whites, soft greens, minimal accent',
  colors: {
    // Primary colors
    primary: {
      forestGreen: '#5a7d6f',
      nordicBlue: '#3d5a7a',
      cream: '#fafbf9',
      warmBrown: '#8b8b8b',
    },
    // Secondary colors
    secondary: {
      sageGreen: '#c4d4cb',
      softGold: '#e4d4c1',
      deepCharcoal: '#4a4a4a',
      lightGray: '#f0f0f0',
    },
    // Accent colors
    accent: {
      sunriseOrange: '#d49a6a',
      waterBlue: '#6ba3bf',
    },
    // Semantic colors
    semantic: {
      success: '#5eb84c',
      warning: '#f5a623',
      error: '#d32f2f',
      info: '#4a90e2',
    },
  },
  tailwind: {
    extend: {
      colors: {
        primary: {
          50: '#f8faf9',
          100: '#f0f3f2',
          200: '#dde6e3',
          300: '#cad6d1',
          400: '#9eb5ae',
          500: '#7d9590',
          600: '#6a8178',
          700: '#5a7d6f',
          800: '#3f5550',
          900: '#2a3935',
        },
        secondary: {
          50: '#f5f7fa',
          100: '#e8eef5',
          200: '#d0dce9',
          300: '#a8c1da',
          400: '#699bc5',
          500: '#4b7bad',
          600: '#3d5a7a',
          700: '#2d4258',
          800: '#1f2d39',
          900: '#131c22',
        },
        accent: {
          50: '#fef9f6',
          100: '#fde8da',
          200: '#fad1b8',
          300: '#f5b896',
          400: '#eb9972',
          500: '#d49a6a',
          600: '#bc7d56',
          700: '#9d6546',
          800: '#7f4f37',
          900: '#5f3a28',
        },
      },
    },
  },
} as const;

import { nordicStandard } from './nordic-standard';
import { nordicMinimal } from './nordic-minimal';
import { adventureBold } from './adventure-bold';

export type ThemeName = 'nordic-standard' | 'nordic-minimal' | 'adventure-bold';

export type Theme = {
  name: string;
  label: string;
  description: string;
  colors: {
    primary: Record<string, string>;
    secondary: Record<string, string>;
    accent: Record<string, string>;
    semantic: Record<string, string>;
  };
  tailwind: Record<string, any>;
};

const themes = {
  'nordic-standard': nordicStandard,
  'nordic-minimal': nordicMinimal,
  'adventure-bold': adventureBold,
} as Record<ThemeName, Theme>;

export const getTheme = (themeName: string = 'nordic-standard'): Theme => {
  const normalizedName = themeName.toLowerCase() as ThemeName;
  
  if (normalizedName in themes) {
    return themes[normalizedName];
  }
  
  console.warn(
    `Theme "${themeName}" not found. Available themes: ${Object.keys(themes).join(', ')}. Using "nordic-standard" as fallback.`
  );
  
  return themes['nordic-standard'];
};

export const getActiveTheme = (): Theme => {
  const themeName = process.env.NEXT_PUBLIC_THEME || 'nordic-standard';
  return getTheme(themeName);
};

export const getAllThemes = (): Theme[] => {
  return Object.values(themes);
};

export const getThemeNames = (): ThemeName[] => {
  return Object.keys(themes) as ThemeName[];
};

export default themes;

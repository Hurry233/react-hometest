import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Theme utility functions
export const themes = {
  light: 'light',
  dark: 'dark',
  system: 'system',
} as const;

export type Theme = typeof themes[keyof typeof themes];

// CSS variable utilities
export const cssVars = {
  background: 'hsl(var(--background))',
  foreground: 'hsl(var(--foreground))',
  card: 'hsl(var(--card))',
  cardForeground: 'hsl(var(--card-foreground))',
  popover: 'hsl(var(--popover))',
  popoverForeground: 'hsl(var(--popover-foreground))',
  primary: 'hsl(var(--primary))',
  primaryForeground: 'hsl(var(--primary-foreground))',
  secondary: 'hsl(var(--secondary))',
  secondaryForeground: 'hsl(var(--secondary-foreground))',
  muted: 'hsl(var(--muted))',
  mutedForeground: 'hsl(var(--muted-foreground))',
  accent: 'hsl(var(--accent))',
  accentForeground: 'hsl(var(--accent-foreground))',
  destructive: 'hsl(var(--destructive))',
  destructiveForeground: 'hsl(var(--destructive-foreground))',
  border: 'hsl(var(--border))',
  input: 'hsl(var(--input))',
  ring: 'hsl(var(--ring))',
} as const;

// Animation utilities
export const animations = {
  fadeIn: 'animate-fadeIn',
  slideInLeft: 'animate-slideInLeft',
  slideInRight: 'animate-slideInRight',
  scaleIn: 'animate-scaleIn',
  float: 'animate-float',
} as const;

// Interactive utilities
export const interactive = {
  hoverLift: 'hover-lift',
  hoverScale: 'hover-scale',
  hoverRotate: 'hover-rotate',
} as const;

// Layout utilities
export const layout = {
  container: 'container',
  stackXxl: 'stack-xxl',
  stackXl: 'stack-xl',
  stackLg: 'stack-lg',
  stackMd: 'stack-md',
  stackSm: 'stack-sm',
} as const;

// Typography utilities
export const typography = {
  h1: 'h1',
  h2: 'h2',
  pXl: 'p-xl',
  p: 'p',
  small: 'small',
} as const;

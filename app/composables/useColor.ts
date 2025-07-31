import type { Color } from 'culori/fn';
import type { OUTPUT_FORMATS } from '~/constants/color';
import { formatHex, formatHsl, formatRgb, interpolate, parse, wcagLuminance } from 'culori/fn';

export type ColorType = 'tint' | 'base' | 'shade';

export type ColorFormat = (typeof OUTPUT_FORMATS)[number];

export interface GeneratedColor {
  color: string;
  weight: string;
  type: ColorType;
  isBright: boolean;
}

const BRIGHTNESS_THRESHOLD = 0.2;

/**
 * Color manipulation and generation utilities.
 * Provides functions to generate tints and shades, format colors, and check color properties.
 */
export function useColor() {
  const formatters = {
    hex: formatHex,
    rgb: formatRgb,
    hsl: formatHsl,
  } as const;

  const formatOklch = (color: Color, format: ColorFormat = 'hex'): string => {
    return formatters[format](color);
  };

  const isBrightColor = (color: string): boolean => wcagLuminance(color) > BRIGHTNESS_THRESHOLD;

  const isValidColor = (input: string): boolean => !!parse(input);

  const mixOklch = (color1: string, color2: string, amount: number, format: ColorFormat = 'hex'): string => {
    const interpolator = interpolate([color1, color2], 'oklch');
    const mixed = interpolator(amount);
    return formatOklch(mixed, format);
  };

  /**
   * Generates a tint of the base color by mixing it with white.
   * @param baseColor - The base color in hex format.
   * @param amount - The amount of white to mix in, between 0 and 1.
   * @param format - Output format
   * @returns The tinted color in the specified format
   */
  const tintMix = (baseColor: string, amount: number, format: ColorFormat = 'hex'): string =>
    mixOklch(baseColor, '#FFFFFF', amount, format);

  /**
   * Generates a shade of the base color by mixing it with black.
   * @param baseColor - The base color in hex format.
   * @param amount - The amount of black to mix in, between 0 and 1.
   * @param format - Output format
   * @returns The shaded color in the specified format
   */
  const shadeMix = (baseColor: string, amount: number, format: ColorFormat = 'hex'): string =>
    mixOklch(baseColor, '#000000', amount, format);

  /**
   * Generates a color scale based on the base color.
   * @param baseColor - The base color in hex format.
   * @param weightStep - The step size for the color scale.
   * @param format - Output format (hex/rgb/hsl)
   */
  const generateColors = (baseColor: string, weightStep: number, format: ColorFormat = 'hex'): GeneratedColor[] => {
    if (!isValidColor(baseColor)) return [];

    const steps = Math.floor(100 / weightStep);
    const colors: GeneratedColor[] = [];

    for (let i = steps; i > 0; i--) {
      const amount = i / steps;
      const weight = Math.round(amount * 100);
      const tint = tintMix(baseColor, amount, format);
      colors.push({
        color: tint,
        weight: `+${weight}%`,
        type: 'tint',
        isBright: isBrightColor(tint),
      });
    }

    const baseParsed = parse(baseColor);
    colors.push({
      color: baseParsed ? formatOklch(baseParsed, format) : '',
      weight: '0%',
      type: 'base',
      isBright: isBrightColor(baseColor),
    });

    for (let i = 1; i <= steps; i++) {
      const amount = i / steps;
      const weight = Math.round(amount * 100);
      const shade = shadeMix(baseColor, amount, format);
      colors.push({
        color: shade,
        weight: `-${weight}%`,
        type: 'shade',
        isBright: isBrightColor(shade),
      });
    }

    return colors;
  };

  const formatHexColor = (hexColor: string, includeHash = true): string => {
    const hasHash = hexColor.startsWith('#');
    return includeHash
      ? hasHash ? hexColor : `#${hexColor}`
      : hasHash ? hexColor.slice(1) : hexColor;
  };

  const getRandomColor = (): string =>
    formatHex({
      mode: 'rgb',
      r: Math.random(),
      g: Math.random(),
      b: Math.random(),
    });

  return {
    generateColors,
    formatHexColor,
    getRandomColor,
    isBrightColor,
    isValidColor,
    tintMix,
    shadeMix,
  };
}

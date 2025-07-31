import { formatHex, interpolate, parse, wcagLuminance } from 'culori/fn';

export type ColorType = 'tint' | 'base' | 'shade';

export interface GeneratedColor {
  color: string;
  weight: string;
  type: ColorType;
  isBright: boolean;
}

const BRIGHTNESS_THRESHOLD = 0.2;

export function useColor() {
  const isBrightColor = (color: string): boolean => wcagLuminance(color) > BRIGHTNESS_THRESHOLD;

  const isValidColor = (input: string): boolean => !!parse(input);

  const mixOklch = (color1: string, color2: string, amount: number): string => {
    const interpolator = interpolate([color1, color2], 'oklch');
    return formatHex(interpolator(amount));
  };

  /**
   * Generates a tint of the base color by mixing it with white.
   * @param baseColor - The base color in hex format.
   * @param amount - The amount of white to mix in, between 0 and 1.
   * @returns The tinted color in hex format.
   */
  const tintMix = (baseColor: string, amount: number): string =>
    mixOklch(baseColor, '#FFFFFF', amount);

  /**
   * Generates a shade of the base color by mixing it with black.
   * @param baseColor - The base color in hex format.
   * @param amount - The amount of black to mix in, between 0 and 1.
   * @returns The shaded color in hex format.
   */
  const shadeMix = (baseColor: string, amount: number): string =>
    mixOklch(baseColor, '#000000', amount);

  const generateColors = (baseColor: string, weightStep: number): GeneratedColor[] => {
    if (!isValidColor(baseColor)) return [];

    const steps = Math.floor(100 / weightStep);
    const colors: GeneratedColor[] = [];

    for (let i = steps; i > 0; i--) {
      const amount = i / steps;
      const weight = Math.round(amount * 100);
      const tintHex = tintMix(baseColor, amount);
      colors.push({
        color: tintHex,
        weight: `+${weight}%`,
        type: 'tint',
        isBright: isBrightColor(tintHex),
      });
    }

    colors.push({
      color: baseColor,
      weight: '0%',
      type: 'base',
      isBright: isBrightColor(baseColor),
    });

    for (let i = 1; i <= steps; i++) {
      const amount = i / steps;
      const weight = Math.round(amount * 100);
      const shadeHex = shadeMix(baseColor, amount);
      colors.push({
        color: shadeHex,
        weight: `-${weight}%`,
        type: 'shade',
        isBright: isBrightColor(shadeHex),
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

import { TinyColor } from '@ctrl/tinycolor';

export type ColorType = 'tint' | 'base' | 'shade';

export type GeneratedColor = {
  color: string;
  weight: string;
  type: ColorType;
};

export function useColor() {
  const createTinyColor = (colorCode: string) => {
    const tinyColor = new TinyColor(colorCode);
    return tinyColor.isValid ? tinyColor : undefined;
  };

  const generateColors = (baseColor: string, weightStep: number): GeneratedColor[] => {
    const tinyColor = createTinyColor(baseColor);
    if (!tinyColor) return [];

    try {
      const steps = Math.floor(100 / weightStep);
      const result: GeneratedColor[] = [];

      // tints
      for (let i = steps; i > 0; i--) {
        const percentage = (i * weightStep).toFixed(1);
        result.push({
          color: tinyColor.tint(Number(percentage)).toHexString(),
          weight: `+${percentage}%`,
          type: 'tint',
        });
      }

      // base color
      result.push({
        color: tinyColor.toHexString(),
        weight: '0%',
        type: 'base',
      });

      // shades
      for (let i = 1; i <= steps; i++) {
        const percentage = (i * weightStep).toFixed(1);
        result.push({
          color: tinyColor.shade(Number(percentage)).toHexString(),
          weight: `-${percentage}%`,
          type: 'shade',
        });
      }

      return result;
    } catch (error) {
      console.error('Error generating colors:', error);
      return [];
    }
  };

  const isBrightColor = (hexColor: string) => {
    const tinyColor = createTinyColor(hexColor);
    if (!tinyColor) return true;

    return tinyColor.isLight();
  };

  const formatHexColor = (hexColor: string, includeHash = true): string =>
    includeHash
      ? hexColor.startsWith('#')
        ? hexColor
        : `#${hexColor}`
      : hexColor.startsWith('#')
        ? hexColor.slice(1)
        : hexColor;

  return {
    generateColors,
    isBrightColor,
    formatHexColor,
  };
}

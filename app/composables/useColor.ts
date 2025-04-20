import { TinyColor } from '@ctrl/tinycolor';

export type ColorType = 'tint' | 'base' | 'shade';

export type GeneratedColor = {
  color: string;
  weight: string;
  type: ColorType;
  isBright: boolean;
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
        const percentage = Number((i * weightStep).toFixed(1));
        const tintColor = tinyColor.clone().tint(percentage);

        result.push({
          color: tintColor.toHexString(),
          weight: `+${percentage}%`,
          type: 'tint',
          isBright: tintColor.isLight(),
        });
      }

      // base color
      result.push({
        color: tinyColor.toHexString(),
        weight: '0%',
        type: 'base',
        isBright: tinyColor.isLight(),
      });

      // shades
      for (let i = 1; i <= steps; i++) {
        const percentage = Number((i * weightStep).toFixed(1));
        const shadeColor = tinyColor.clone().shade(percentage);

        result.push({
          color: shadeColor.toHexString(),
          weight: `-${percentage}%`,
          type: 'shade',
          isBright: shadeColor.isLight(),
        });
      }

      return result;
    } catch (error) {
      console.error('Error generating colors:', error);
      return [];
    }
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
    formatHexColor,
  };
}

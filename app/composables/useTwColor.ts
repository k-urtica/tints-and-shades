import { TinyColor } from '@ctrl/tinycolor';
import type { ColorType, GeneratedColor } from '@/composables/useColor';

const TAILWIND_SCALES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
const BASE_SCALE = 500;

const TINT_RANGES = [
  { min: 0, max: 100, startPercent: 85, endPercent: 95 }, // brightest
  { min: 100, max: 200, startPercent: 65, endPercent: 85 },
  { min: 200, max: 300, startPercent: 45, endPercent: 65 }, // 200-300 range
  { min: 300, max: 400, startPercent: 25, endPercent: 45 }, // 300-400 range
  { min: 400, max: BASE_SCALE, startPercent: 0, endPercent: 25 }, // darkest (closest to base)
] as const;

const SHADE_RANGES = [
  { min: BASE_SCALE, max: 600, startPercent: 0, endPercent: 20 },
  { min: 600, max: 800, startPercent: 20, endPercent: 55 },
  { min: 800, max: 900, startPercent: 55, endPercent: 70 },
  { min: 900, max: 951, startPercent: 70, endPercent: 82 },
] as const;

/**
 * Composable that generates colors according to Tailwind CSS color scale (50-950)
 */
export const useTwColor = () => {
  const getAdjustmentRange = (scale: number) =>
    scale < BASE_SCALE
      ? TINT_RANGES.find((r) => scale >= r.min && scale < r.max)
      : SHADE_RANGES.find((r) => scale >= r.min && scale < r.max);

  /**
   * Calculate color amount for both tints and shades
   * @param scale - Tailwind scale value
   * @param weightValue - Weight parameter for adjusting color intensity
   */
  const calculateColorAmount = (scale: number, weightValue: number): number => {
    const range = getAdjustmentRange(scale);
    if (!range) return 0;

    const { min, max, startPercent, endPercent } = range;

    const normalizedPosition = (scale - min) / (max - min);
    const basePercentage =
      startPercent + normalizedPosition * (endPercent - startPercent);

    // Apply weight factor - higher weight means more pronounced changes
    const weightFactor = 1 + (weightValue > 10 ? (weightValue - 10) * 0.01 : 0);

    return Math.min(scale < BASE_SCALE ? 92 : 82, basePercentage * weightFactor);
  };

  const adjustSaturation = (color: TinyColor, scale: number): TinyColor => {
    if (scale === BASE_SCALE) return color;

    const hsl = color.toHsl();

    if (scale < BASE_SCALE) {
      // Decrease saturation for tints (closer to white)
      hsl.s *= 1 - ((BASE_SCALE - scale) / 450) * 0.5;
    } else if (scale <= 800) {
      // Increase saturation for mid-range shades
      hsl.s = Math.min(1, hsl.s * (1 + ((scale - BASE_SCALE) / 300) * 0.2));
    } else {
      // Decrease saturation for dark shades (closer to black)
      hsl.s *= 1 - ((scale - 800) / 150) * 0.5;
    }

    return new TinyColor(hsl);
  };

  const generateTailwindColors = (
    baseColor: string,
    weightValue: number
  ): GeneratedColor[] => {
    const tinyColor = new TinyColor(baseColor);
    if (!tinyColor.isValid) return [];

    try {
      const result = TAILWIND_SCALES.map((scale) => {
        if (scale === BASE_SCALE) {
          return {
            color: tinyColor.toHexString(),
            weight: `${scale}`,
            type: 'base' as const,
            isBright: tinyColor.isLight(),
          };
        }

        const amount = calculateColorAmount(scale, weightValue);
        const isLighter = scale < BASE_SCALE;
        const type = isLighter ? 'tint' : 'shade';

        const colorInstance = isLighter
          ? tinyColor.clone().tint(amount)
          : tinyColor.clone().shade(amount);

        const adjustedColor = adjustSaturation(colorInstance, scale);

        return {
          color: adjustedColor.toHexString(),
          weight: `${scale}`,
          type: type as ColorType,
          isBright: adjustedColor.isLight(),
        };
      });

      return result;
    } catch (error) {
      console.error('Error generating Tailwind colors:', error);
      return [];
    }
  };

  return {
    tailwindScales: TAILWIND_SCALES,
    generateTailwindColors,
  };
};

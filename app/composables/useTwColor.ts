import type { ColorType, GeneratedColor } from '@/composables/useColor';
import { formatHex, parse } from 'culori/fn';

const TAILWIND_SCALES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950] as const;
const BASE_SCALE = 500;

const MAX_TINT_AMOUNT = 0.92;
const MAX_SHADE_AMOUNT = 0.82;
const TINT_SATURATION_DIVISOR = 450;
const TINT_SATURATION_FACTOR = 0.5;
const SHADE_SATURATION_MID = 300;
const SHADE_SATURATION_MID_FACTOR = 0.2;
const SHADE_SATURATION_HIGH = 150;
const SHADE_SATURATION_HIGH_FACTOR = 0.5;
const WEIGHT_THRESHOLD = 10;
const WEIGHT_FACTOR_STEP = 0.01;

const COLOR_RANGES = [
  { min: 0, max: 100, startPercent: 85, endPercent: 95 },
  { min: 100, max: 200, startPercent: 65, endPercent: 85 },
  { min: 200, max: 300, startPercent: 45, endPercent: 65 },
  { min: 300, max: 400, startPercent: 25, endPercent: 45 },
  { min: 400, max: BASE_SCALE, startPercent: 0, endPercent: 25 },
  { min: BASE_SCALE, max: 600, startPercent: 0, endPercent: 20 },
  { min: 600, max: 800, startPercent: 20, endPercent: 55 },
  { min: 800, max: 900, startPercent: 55, endPercent: 70 },
  { min: 900, max: 951, startPercent: 70, endPercent: 82 },
] as const;

/**
 * Composables for generating Tailwind CSS color scales based on a base color.
 * Provides functions to generate tints and shades, adjust saturation, and format colors.
 */
export function useTwColor() {
  const { isValidColor, isBrightColor, formatHexColor, tintMix, shadeMix } = useColor();

  const getMaxAmount = (scale: number) => scale < BASE_SCALE ? MAX_TINT_AMOUNT : MAX_SHADE_AMOUNT;
  const getColorType = (scale: number): ColorType => scale < BASE_SCALE ? 'tint' : 'shade';

  const calculateColorAmount = (scale: number, weightValue: number): number => {
    const range = COLOR_RANGES.find((r) => scale >= r.min && scale < r.max);
    if (!range) return 0;

    const normalized = (scale - range.min) / (range.max - range.min);
    const percent = range.startPercent + normalized * (range.endPercent - range.startPercent);
    const weight = 1 + (weightValue > WEIGHT_THRESHOLD ? (weightValue - WEIGHT_THRESHOLD) * WEIGHT_FACTOR_STEP : 0);

    return Math.min(getMaxAmount(scale), (percent * weight) / 100);
  };

  const adjustSaturation = (color: string, scale: number): string => {
    if (scale === BASE_SCALE) return color;

    const parsed = parse(color);
    if (!parsed || parsed.mode !== 'hsl') return color;

    let { h, s, l, alpha } = parsed;

    if (scale < BASE_SCALE) {
      s *= 1 - ((BASE_SCALE - scale) / TINT_SATURATION_DIVISOR) * TINT_SATURATION_FACTOR;
    } else if (scale <= 800) {
      s = Math.min(1, s * (1 + ((scale - BASE_SCALE) / SHADE_SATURATION_MID) * SHADE_SATURATION_MID_FACTOR));
    } else {
      s *= 1 - ((scale - 800) / SHADE_SATURATION_HIGH) * SHADE_SATURATION_HIGH_FACTOR;
    }
    return formatHex({ mode: 'hsl', h, s, l, alpha });
  };

  const generateTailwindColors = (baseColor: string, weightValue: number): GeneratedColor[] => {
    if (!isValidColor(baseColor)) return [];
    return TAILWIND_SCALES.map((scale) => {
      if (scale === BASE_SCALE) {
        return {
          color: formatHexColor(baseColor),
          weight: `${scale}`,
          type: 'base' as const,
          isBright: isBrightColor(baseColor),
        };
      }

      const amount = calculateColorAmount(scale, weightValue);
      const rawColor = scale < BASE_SCALE ? tintMix(baseColor, amount) : shadeMix(baseColor, amount);
      const adjustedColor = adjustSaturation(rawColor, scale);

      return {
        color: formatHexColor(adjustedColor),
        weight: `${scale}`,
        type: getColorType(scale),
        isBright: isBrightColor(adjustedColor),
      };
    });
  };

  return {
    tailwindScales: TAILWIND_SCALES,
    generateTailwindColors,
  };
}

import { parseHex } from 'culori/fn';
import { DEFAULT_COLOR, DEFAULT_WEIGHT, MAX_WEIGHT, MIN_WEIGHT, OUTPUT_FORMATS } from '~/constants/color';

/**
 * Composables for managing color query parameters in the URL.
 */
export function useColorQuery() {
  const route = useRoute();

  interface ColorQueryParams {
    color?: string;
    weight?: string;
    format?: ColorFormat;
  }

  const isValidHexColor = (value: unknown): value is string => {
    return typeof value === 'string' && !!parseHex(value);
  };

  const isValidWeight = (value: unknown): value is number => {
    return (
      typeof value === 'number' &&
      !Number.isNaN(value) &&
      value >= MIN_WEIGHT &&
      value <= MAX_WEIGHT
    );
  };

  const updateQuery = (queryParams: ColorQueryParams) => {
    navigateTo({
      query: { ...route.query, ...queryParams },
    });
  };

  const color = computed<string>({
    get: () => {
      const queryColor = route.query.color;
      return isValidHexColor(queryColor) ? queryColor : DEFAULT_COLOR;
    },
    set: (newValue: string) => {
      if (isValidHexColor(newValue)) {
        updateQuery({ color: newValue });
      }
    },
  });

  const weight = computed<number>({
    get: () => {
      const queryWeight = Number(route.query.weight);
      return isValidWeight(queryWeight) ? queryWeight : DEFAULT_WEIGHT;
    },
    set: (newValue: number) => {
      if (isValidWeight(newValue)) {
        updateQuery({ weight: String(newValue) });
      }
    },
  });

  const format = computed<ColorFormat>({
    get: () => {
      const queryFormat = route.query.format as ColorFormat;
      return OUTPUT_FORMATS.includes(queryFormat) ? queryFormat : 'hex';
    },
    set: (newValue: ColorFormat) => {
      if (OUTPUT_FORMATS.includes(newValue)) {
        updateQuery({ format: newValue });
      }
    },
  });

  onMounted(() => {
    const queryColor = route.query.color;
    const queryWeight = Number(route.query.weight);

    const hasValidColor = isValidHexColor(queryColor);
    const hasValidWeight = isValidWeight(queryWeight);

    if (!hasValidColor || !hasValidWeight) {
      updateQuery({
        color: hasValidColor ? queryColor : DEFAULT_COLOR,
        weight: hasValidWeight ? String(queryWeight) : String(DEFAULT_WEIGHT),
      });
    }
  });

  return {
    color,
    weight,
    format,
  };
}

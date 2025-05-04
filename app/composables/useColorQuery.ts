export function useColorQuery() {
  const route = useRoute();
  const router = useRouter();

  const DEFAULT_COLOR = '#7085f0';
  const DEFAULT_WEIGHT = 5;
  const MIN_WEIGHT = 1;
  const MAX_WEIGHT = 50;

  type ColorQueryParams = {
    color?: string;
    weight?: string;
  };

  const isValidHexColor = (value: unknown): value is string => {
    return typeof value === 'string' && /^#[0-9A-Fa-f]{6}$/i.test(value);
  };

  const isValidWeight = (value: unknown): value is number => {
    return (
      typeof value === 'number' &&
      !isNaN(value) &&
      value >= MIN_WEIGHT &&
      value <= MAX_WEIGHT
    );
  };

  const updateQuery = (queryParams: ColorQueryParams) => {
    router.replace({
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

  tryOnMounted(() => {
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
  };
}

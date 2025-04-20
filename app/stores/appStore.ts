type Appearance = {
  isPadded: boolean;
  isOneLine: boolean;
  indicator: boolean;
  copyWithHash: boolean;
  border: boolean;
};

export const useAppStore = defineStore('app', () => {
  const color = ref('#7085f0');

  const weight = ref(5);

  const appearance = ref<Appearance>({
    isPadded: true,
    isOneLine: false,
    indicator: true,
    copyWithHash: true,
    border: true,
  });

  return {
    color,
    weight,
    appearance,
  };
});

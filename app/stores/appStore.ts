type Appearance = {
  isPadded: boolean;
  isOneLine: boolean;
  indicator: boolean;
  copyWithHash: boolean;
  border: boolean;
  showText: boolean;
};

export const useAppStore = defineStore('app', () => {
  const appearance = ref<Appearance>({
    isPadded: true,
    isOneLine: false,
    indicator: true,
    copyWithHash: true,
    border: true,
    showText: true,
  });

  return {
    appearance,
  };
});

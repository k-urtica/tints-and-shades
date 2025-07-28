export function useDocToggle() {
  const route = useRoute();

  const isDocVisible = useState('doc-visible', () => false);
  const isDocVisibleQuery = computed(() => route.query.doc === 'true');

  // SSG hydration strategy: prevent mismatch by syncing state after mount
  if (import.meta.client) {
    // Initialize state with actual query value after hydration completes
    onMounted(() => {
      isDocVisible.value = isDocVisibleQuery.value;
    });

    // Keep state synchronized with query changes
    watch(isDocVisibleQuery, (newValue) => {
      isDocVisible.value = newValue;
    });
  }

  const toggleDoc = () => {
    const query = { ...route.query };
    const newValue = !isDocVisible.value;

    if (newValue) {
      query.doc = 'true';
    } else {
      delete query.doc;
    }

    navigateTo({ query });
  };

  return {
    isDocVisible: readonly(isDocVisible),
    toggleDoc
  };
}

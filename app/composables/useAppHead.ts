export interface UseAppHeadOptions {
  title: MaybeRefOrGetter<string>;
  titleTemplate?: MaybeRefOrGetter<string>;
  description: MaybeRefOrGetter<string>;
}

export function useAppHead(options: UseAppHeadOptions) {
  const { url } = useSiteConfig();
  const route = useRoute();

  useSeoMeta({
    title: options.title,
    titleTemplate: options.titleTemplate || '%s | Tints and Shades',
    description: options.description,
    ogTitle: options.title,
    ogUrl: () => `${url}${route.path}`,
    ogDescription: options.description,
    twitterTitle: options.title,
    twitterDescription: options.description,
  });
}

import type { ToastProps } from '#ui/types';

type ShowParams = {
  toastType?: 'success' | 'warning' | 'error';
} & ToastProps;

const TOAST_TYPE = {
  success: {
    color: 'success',
    icon: 'i-ph-check-circle-duotone',
  },
  warning: {
    color: 'warning',
    icon: 'i-ph-warning-duotone',
  },
  error: {
    color: 'error',
    icon: 'i-ph-warning-circle-duotone',
  },
} as const satisfies Record<
  string,
  { color: ToastProps['color']; icon: ToastProps['icon'] }
>;

export function useAppToast() {
  const toast = useToast();

  const show = (params: ShowParams) => {
    const { toastType, duration = 4000 } = params;

    toast.add({ ...params, duration, ...(toastType ? TOAST_TYPE[toastType] : {}) });
  };

  return {
    show,
  };
}

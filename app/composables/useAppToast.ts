import type { Notification } from '#ui/types';

type ShowParams = {
  type?: 'success' | 'warning' | 'error';
} & Partial<Notification>;

const toastType = {
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
} as const;

export function useAppToast() {
  const toast = useToast();

  const show = (params: ShowParams) => {
    const { type, timeout = 4000 } = params;
    const _toastType = type ? toastType[type] : undefined;

    toast.add({ ...params, ..._toastType, timeout });
  };

  return {
    show,
  };
}

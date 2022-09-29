import { atom } from 'recoil'

export const colorState = atom<string>({
  key: 'color',
  default: '#6ee7b7',
})

export const weightState = atom<number>({
  key: 'weight',
  default: 5,
})

export const cardGapState = atom<boolean>({
  key: 'cardGap',
  default: true,
})

export const cardOnelineState = atom<boolean>({
  key: 'cardOneline',
  default: false,
})

export const indicatorState = atom<boolean>({
  key: 'indicator',
  default: true,
})

export const previewBgState = atom<string>({
  key: 'previewBg',
  default: '#1a1b1e',
})

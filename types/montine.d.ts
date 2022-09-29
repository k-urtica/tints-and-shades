import { Tuple, DefaultMantineColor } from '@mantine/core'

type ExtendedCustomColors = 'emerald' | DefaultMantineColor

// https://mantine.dev/theming/colors/#add-custom-colors-types
declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>
  }
}

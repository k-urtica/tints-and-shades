import { RecoilRoot } from 'recoil'
import { MantineProvider } from '@mantine/core'

const CustomProvider = ({ element }: any) => {
  return (
    <MantineProvider
      theme={{
        colorScheme: 'dark',
        colors: {
          emerald: [
            '#ecfdf5',
            '#d1fae5',
            '#a7f3d0',
            '#6ee7b7',
            '#34d399',
            '#10b981',
            '#059669',
            '#047857',
            '#065f46',
            '#064e3b',
          ],
          success: [
            '#deffed',
            '#b5f8d3',
            '#8af3b7',
            '#5ded9b',
            '#31e780',
            '#18ce66',
            '#0ca04f',
            '#037238',
            '#004620',
            '#001905',
          ],
        },

        primaryColor: 'emerald',
        primaryShade: { light: 5, dark: 4 },

        components: {
          Button: {
            styles: { root: { borderWidth: 2 } },
          },

          Input: {
            styles: {
              input: { borderWidth: 2, ':focus': { borderColor: 'gray' } },
            },
          },
        },

        defaultRadius: 12,
        activeStyles: {
          transform: 'scale(0.97)',
          transitionDuration: '0.2s',
        },
        cursorType: 'pointer',
      }}
      withGlobalStyles
      // withNormalizeCSS
    >
      <RecoilRoot>{element}</RecoilRoot>
    </MantineProvider>
  )
}

export default CustomProvider

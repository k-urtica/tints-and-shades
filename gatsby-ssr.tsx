import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStylesServer, ServerStyles } from '@mantine/ssr'
import CustomProvider from './src/provider/CustomProvider'

const stylesServer = createStylesServer()
export const replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const html = renderToString(bodyComponent)
  setHeadComponents([
    React.createElement(ServerStyles, {
      html: html,
      server: stylesServer,
      key: 'mantine-styles',
    }),
  ])
  replaceBodyHTMLString(html)
}

export const wrapRootElement = CustomProvider

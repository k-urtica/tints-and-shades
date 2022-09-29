import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStylesServer, ServerStyles } from '@mantine/ssr'
import CustomProvider from './src/provider/CustomProvider'
import { GatsbySSR } from 'gatsby'

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

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHtmlAttributes,
}) => {
  setHtmlAttributes({ lang: `en`, prefix: `og: https://ogp.me/ns#` })
}

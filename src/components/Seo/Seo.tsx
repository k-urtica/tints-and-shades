import { useLocation } from '@reach/router'
import { useSiteMetadata } from '../../hooks/useSiteMeta'

type Props = {
  title?: string
  description?: string
  children?: React.ReactNode
}

const Seo = ({ title, description, children }: Props) => {
  const { pathname } = useLocation()

  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
    image,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname}`,
    image: `${siteUrl}${image}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:description" content={seo.description} />

      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='1em' font-size='85'>🎨</text></svg>"
      />
      {children}
    </>
  )
}

export { Seo }

import { Button } from '@mantine/core'
import { Link } from 'gatsby'
import { Seo } from '../components/Seo/Seo'

const NotFoundPage = () => {
  return (
    <main className="grid h-screen place-content-center">
      <h1 className="text-center text-3xl font-bold">Page not found</h1>
      <p className="mt-10">
        Sorry 😔, we couldn’t find what you were looking for.
      </p>
      <div className="mt-6 text-center">
        <Link to="/">
          <Button component="a">Back to home</Button>
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <Seo title="Page Not found" />

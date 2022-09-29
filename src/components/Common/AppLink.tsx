import { Link } from 'gatsby'

type Props = {
  children: React.ReactNode
  to: string
  className?: string
}

const AppLink = ({ children, to, className }: Props) => {
  if (/^https?:\/\//.test(to)) {
    return (
      <a
        href={to}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    )
  }
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  )
}

export { AppLink }

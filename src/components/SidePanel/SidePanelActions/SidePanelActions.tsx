import { AppLink } from '../../Common/AppLink'
import { FaGithub } from 'react-icons/fa'
import { Button } from '@mantine/core'

const SidePanelActions = () => {
  return (
    <div className="flex items-center justify-between p-5">
      <div>
        <Button
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/k-urtica/tints-and-shades"
          variant="light"
          leftIcon={<FaGithub size={20} />}
        >
          GitHub
        </Button>
      </div>
      <div className="text-center text-sm text-zinc-400">
        Made by 💚{' '}
        <AppLink to="https://twitter.com/k_urtica" className="text-emerald-300">
          K(k_urtica)
        </AppLink>
      </div>
    </div>
  )
}

export { SidePanelActions }

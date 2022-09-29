import { EditWeight } from './EditWeight/EditWeight'
import { EditColor } from './EditColor/EditColor'
import { PreviewSettings } from './PreviewSettings/PreviewSettings'
import { AppLink } from '../Common/AppLink'

const SidePanel = () => {
  return (
    <nav className="flex h-screen w-full flex-col gap-6 p-5 md:w-80 lg:w-96">
      <div>
        <h1 className="text-center text-2xl font-black text-zinc-100">
          Tints and Shades
          <br />
          Generator
        </h1>
      </div>

      <div className="flex-1">
        <div className="flex flex-col gap-4">
          <section className="border-t border-zinc-600/60 pt-4">
            <EditColor />
          </section>
          <section>
            <EditWeight />
          </section>

          <section className="border-t border-zinc-600/60 pt-4">
            <PreviewSettings />
          </section>
        </div>
      </div>

      <div>
        <div className="text-center text-zinc-400">
          Made by{' '}
          <AppLink
            to="https://twitter.com/k_urtica"
            className="text-emerald-300"
          >
            K(k_urtica)
          </AppLink>{' '}
          💚 with Gatsby
        </div>
      </div>
    </nav>
  )
}

export { SidePanel }

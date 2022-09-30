import { EditWeight } from './EditWeight/EditWeight'
import { EditColor } from './EditColor/EditColor'
import { PreviewSettings } from './PreviewSettings/PreviewSettings'
import { ScrollArea } from '@mantine/core'
import { SidePanelActions } from './SidePanelActions/SidePanelActions'

const SidePanel = () => {
  return (
    <nav className="flex h-screen w-full flex-col border-none border-zinc-700 md:w-80 md:border-r md:border-solid lg:w-96">
      <ScrollArea offsetScrollbars className="flex-1 px-5">
        <div className="py-4">
          <h1 className="text-center text-2xl font-black text-zinc-100">
            Tints and Shades
            <br />
            Generator
          </h1>
        </div>

        <div>
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
      </ScrollArea>

      <div className="border-t border-zinc-700">
        <SidePanelActions />
      </div>
    </nav>
  )
}

export { SidePanel }

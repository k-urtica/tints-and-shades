import { SidePanel } from '../components/SidePanel/SidePanel'
import { Preview } from '../components/Preview/Preview'
import { Seo } from '../components/Seo/Seo'

const IndexPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex min-h-screen flex-col flex-wrap md:flex-row">
        <div className="max-h-[50vh] overflow-auto md:sticky md:top-0 md:max-h-screen">
          <SidePanel />
        </div>

        <div className="max-h-[50vh] flex-1 overflow-auto pb-10 md:max-h-full">
          <div className="border-t border-dashed border-zinc-600 md:hidden" />
          <Preview />
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export const Head = () => <Seo />

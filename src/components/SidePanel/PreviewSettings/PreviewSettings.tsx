import { EditBackground } from '../EditBackground/EditBackground'
import { ToggleGap } from '../ToggleGap/ToggleGap'
import { ToggleIndicator } from '../ToggleIndicator/ToggleIndicator'
import { ToggleOneline } from '../ToggleOneline/ToggleOneline'

const PreviewSettings = () => {
  return (
    <div>
      <h2 className="mb-3 text-xl font-bold">Preview Settings</h2>
      <div className="flex flex-col gap-5">
        <ToggleGap />
        <ToggleOneline />
        <ToggleIndicator />
        <EditBackground />
      </div>
    </div>
  )
}

export { PreviewSettings }

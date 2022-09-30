import { Button, CopyButton, Tooltip } from '@mantine/core'
import { useRecoilValue } from 'recoil'
import { hashSymbolState } from '../../store/atoms/appAtom'
import { colorValuesSelector } from '../../store/selectors/appSelector'

const PreviewHeader = () => {
  const colorValues = useRecoilValue(colorValuesSelector)
  const isHash = useRecoilValue(hashSymbolState)

  const copyText = () => {
    return (
      colorValues
        ?.map((e) => (isHash ? e.hexString() : e.hexString().slice(1)))
        .toString() || ''
    )
  }

  return (
    <header className="flex h-12 items-center justify-end px-6">
      <CopyButton value={copyText()} timeout={2000}>
        {({ copied, copy }) => (
          <Tooltip label="Copy all color codes" withArrow position="bottom">
            <Button variant="outline" onClick={copy} disabled={!colorValues}>
              {copied ? 'Copied!' : 'Copy All'}
            </Button>
          </Tooltip>
        )}
      </CopyButton>
    </header>
  )
}

export { PreviewHeader }

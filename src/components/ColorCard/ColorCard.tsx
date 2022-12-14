import { ActionIcon, CopyButton, Indicator, Tooltip } from '@mantine/core'
import { MdContentCopy } from 'react-icons/md'
import { useRecoilValue } from 'recoil'
import { hashSymbolState } from '../../store/atoms/appAtom'

type Props = {
  hex: string
  weight: string
  textColor: string
  isIndicator: boolean
}

const ColorCard = ({ hex, weight, textColor, isIndicator }: Props) => {
  const isHash = useRecoilValue(hashSymbolState)

  const copyText = () => {
    return isHash ? hex : hex.slice(1)
  }

  return (
    <div
      className="group relative min-w-[180px] p-4"
      style={{ background: hex }}
    >
      <Indicator size={14} withBorder processing disabled={!isIndicator}>
        <div className="text-xs" style={{ color: textColor }}>
          {weight}
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div style={{ color: textColor }}>{hex}</div>
          <div className="opacity-50 group-hover:opacity-100 md:opacity-0">
            <CopyButton value={copyText()} timeout={2000}>
              {({ copied, copy }) => (
                <Tooltip
                  label={copied ? 'Copied!' : 'Copy'}
                  withArrow
                  position="top"
                  events={{ hover: true, focus: true, touch: false }}
                >
                  <ActionIcon
                    variant="light"
                    size="lg"
                    onClick={copy}
                    aria-label="copy color code"
                  >
                    <MdContentCopy color={textColor} />
                  </ActionIcon>
                </Tooltip>
              )}
            </CopyButton>
          </div>
        </div>
      </Indicator>
    </div>
  )
}

export { ColorCard }

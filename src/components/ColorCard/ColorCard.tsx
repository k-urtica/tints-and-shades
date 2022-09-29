import { ActionIcon, CopyButton, Indicator, Tooltip } from '@mantine/core'
import { MdContentCopy } from 'react-icons/md'

type Props = {
  hex: string
  weight: string
  textColor: string
  isIndicator: boolean
}

const ColorCard = ({ hex, weight, textColor, isIndicator }: Props) => {
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
          <div className="opacity-0 group-hover:opacity-100">
            <CopyButton value={hex} timeout={2000}>
              {({ copied, copy }) => (
                <Tooltip
                  label={copied ? 'Copied!' : 'Copy'}
                  withArrow
                  position="top"
                >
                  <ActionIcon variant="light" size="lg" onClick={copy}>
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

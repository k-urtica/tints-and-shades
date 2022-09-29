import { useRecoilValue } from 'recoil'
import {
  cardGapState,
  cardOnelineState,
  indicatorState,
  previewBgState,
} from '../../store/atoms/appAtom'
import { ColorCard } from '../ColorCard/ColorCard'
import classNames from 'classnames'
import { PreviewHeader } from '../PreviewHeader/PreviewHeader'
import { colorValuesSelector } from '../../store/selectors/AppSelector'

const Preview = () => {
  const bgColor = useRecoilValue(previewBgState)

  const isCardGap = useRecoilValue(cardGapState)
  const isOneline = useRecoilValue(cardOnelineState)
  const isIndicator = useRecoilValue(indicatorState)
  const colorValues = useRecoilValue(colorValuesSelector)

  return (
    <div>
      <PreviewHeader />

      <main
        className={classNames(
          isCardGap ? 'gap-4' : 'gap-0',
          isOneline ? 'flex-col' : '',
          'flex flex-wrap px-6 transition-all duration-200'
        )}
        style={{ background: bgColor }}
      >
        {colorValues &&
          colorValues.map((color) => {
            return (
              <div key={color.hex + color.weight} className="flex-1">
                <ColorCard
                  hex={color.hexString()}
                  weight={`${color.weight.toFixed(0)}%`}
                  textColor={
                    color.getBrightness() >= 50 ? '#18181b' : '#ffffff'
                  }
                  isIndicator={isIndicator && color.weight === 0}
                />
              </div>
            )
          })}
      </main>
    </div>
  )
}

export { Preview }

import { useRecoilState } from 'recoil'
import { indicatorState } from '../../../store/atoms/appAtom'
import { ToggleSwitch } from '../../Parts/ToggleSwitch'

const ToggleIndicator = () => {
  const [isIndicator, toggleIndicator] = useRecoilState(indicatorState)

  return (
    <ToggleSwitch
      label="Indicator"
      hint="💡 mark the color you entered"
      value={isIndicator}
      onChange={toggleIndicator}
    />
  )
}

export { ToggleIndicator }

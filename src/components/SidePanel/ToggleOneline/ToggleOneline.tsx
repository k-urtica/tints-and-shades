import { useRecoilState } from 'recoil'
import { cardOnelineState } from '../../../store/atoms/appAtom'
import { ToggleSwitch } from '../../Parts/ToggleSwitch'

const ToggleOneline = () => {
  const [isOneline, toggleOneline] = useRecoilState(cardOnelineState)

  return (
    <ToggleSwitch
      label="Card One line"
      value={isOneline}
      onChange={toggleOneline}
    />
  )
}

export { ToggleOneline }

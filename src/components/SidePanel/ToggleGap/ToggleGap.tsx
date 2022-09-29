import { useRecoilState } from 'recoil'
import { cardGapState } from '../../../store/atoms/appAtoms'
import { ToggleSwitch } from '../../Parts/ToggleSwitch'

const ToggleGap = () => {
  const [isGap, toggleGap] = useRecoilState(cardGapState)
  return (
    <ToggleSwitch label="Card Padding" value={isGap} onChange={toggleGap} />
  )
}

export { ToggleGap }

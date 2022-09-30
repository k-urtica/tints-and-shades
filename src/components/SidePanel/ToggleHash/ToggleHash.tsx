import { useRecoilState } from 'recoil'
import { hashSymbolState } from '../../../store/atoms/appAtom'
import { ToggleSwitch } from '../../Parts/ToggleSwitch'

const ToggleHash = () => {
  const [isHash, toggleHash] = useRecoilState(hashSymbolState)

  return (
    <ToggleSwitch
      label="Copy with Hash"
      hint="💡 include hash(#) when copying"
      value={isHash}
      onChange={toggleHash}
    />
  )
}

export { ToggleHash }

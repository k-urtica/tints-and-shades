import { ColorInput } from '@mantine/core'
import { useRecoilState } from 'recoil'
import { previewBgState } from '../../../store/atoms/appAtom'

const EditBackground = () => {
  const [bgColor, setBgColor] = useRecoilState(previewBgState)

  const onChangeColor = (v: string) => {
    v = v.startsWith('#') ? v : `#${v}`
    setBgColor(v)
  }
  return (
    <div>
      <ColorInput
        format={'hex'}
        label="Preview background color"
        swatches={['#1a1b1e', '#fafafa']}
        value={bgColor}
        onChange={onChangeColor}
        aria-label="edit background color"
      />
    </div>
  )
}

export { EditBackground }

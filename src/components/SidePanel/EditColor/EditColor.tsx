import { ActionIcon, ColorInput } from '@mantine/core'
import { useRecoilState } from 'recoil'
import { colorState } from '../../../store/atoms/appAtom'
import { FiRefreshCw } from 'react-icons/fi'

const randomColor = () =>
  `#${(Math.random() * 0xfffff * 1000000).toString(16).slice(0, 6)}`

const EditColor = () => {
  const [color, setColor] = useRecoilState(colorState)

  const onChangeColor = (v: string) => {
    v = v.startsWith('#') ? v : `#${v}`
    setColor(v)
  }
  return (
    <div>
      <h3 className="mb-2 text-xl font-bold">Color Code</h3>
      <ColorInput
        format={'hex'}
        placeholder="Input Color"
        value={color}
        onChange={onChangeColor}
        rightSection={
          <ActionIcon onClick={() => onChangeColor(randomColor())}>
            <FiRefreshCw size={18} />
          </ActionIcon>
        }
      />
    </div>
  )
}

export { EditColor }

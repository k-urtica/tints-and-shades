import { useRecoilState } from 'recoil'
import { weightState } from '../../../store/atoms/appAtoms'
import { NumberInput, Slider } from '@mantine/core'

const EditWeight = () => {
  const [range, setRange] = useRecoilState(weightState)

  const onChangeInput = (val: number | undefined) => {
    if (!val) {
      setRange(1)
      return
    }
    if (val > 100) {
      val = 100
    }
    if (val < 1) {
      val = 1
    }
    setRange(val)
  }

  return (
    <div>
      <h3 className="text-xl font-bold">Weight</h3>

      <NumberInput
        size="xs"
        min={1}
        max={100}
        step={0.1}
        precision={1}
        value={range}
        onChange={(v) => onChangeInput(v)}
        className="ml-auto w-24"
      />

      <Slider
        color={'teal.3'}
        label={null}
        min={1}
        max={100}
        step={0.1}
        value={range}
        onChange={(e) => setRange(Number(e.toFixed(1)))}
        className="mt-1"
      />
    </div>
  )
}

export { EditWeight }

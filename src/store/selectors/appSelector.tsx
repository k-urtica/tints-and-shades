import { selector } from 'recoil'
import Values from 'values.js'
import { colorState, weightState } from '../atoms/appAtoms'

export const colorValuesSelector = selector({
  key: 'colorValues',
  get: ({ get }) => {
    const inputColor = get(colorState)
    const inputWeight = get(weightState)

    let colorValue
    let colors
    try {
      colorValue = new Values(inputColor)
      colors = colorValue.all(inputWeight)
    } catch {
      return null
    }
    return colors
  },
})

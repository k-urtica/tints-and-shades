import { Switch, Text } from '@mantine/core'
import { BiCheck, BiMinus } from 'react-icons/bi'

type Props = {
  value: boolean
  onChange: (v: boolean) => void
  label: string
  hint?: string
}

const ToggleSwitch = ({ value, onChange, label, hint }: Props) => {
  return (
    <div>
      <Switch
        size="md"
        label={label}
        thumbIcon={
          value ? (
            <BiCheck size={14} strokeWidth={2} className="text-emerald-600" />
          ) : (
            <BiMinus size={14} strokeWidth={2} className="text-zinc-600" />
          )
        }
        checked={value}
        onChange={(e) => onChange(e.currentTarget.checked)}
      />
      {hint && (
        <Text size="sm" color={'dark.2'} className="ml-2 mt-1">
          {hint}
        </Text>
      )}
    </div>
  )
}

export { ToggleSwitch }

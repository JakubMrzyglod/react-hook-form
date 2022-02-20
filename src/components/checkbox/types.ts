import {
  GroupComponent,
  InputGroupComponents,
  InputGroupProps
} from '../input/types'

export type CheckboxProps = {
  error?: string
}

export type LabelProps = {
  error?: string
}

export type CheckboxGroupProps = Omit<InputGroupProps, 'type'> & {
  label: string
}

export type CheckboxGroupComponents = Omit<InputGroupComponents, 'Input'> & {
  Checkbox: GroupComponent<'input', CheckboxProps>
  Label: GroupComponent<'label', LabelProps>
}

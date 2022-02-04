import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { StyledComponent } from 'styled-components'
import { Sizes } from '../wrapper/types'

export type InputProps = {
  error?: string
}
export type LabelProps = {
  error?: string
}
export type ErrorProps = {
  error?: string
}

export type InputGroupProps = HtmlInputProps & {
  name: string
  sizes: Sizes
  label?: string
}

export type InputGroupComponents = {
  Input: InputGroupComponent<'input', InputProps>
  Label?: InputGroupComponent<'label', LabelProps>
  Error?: InputGroupComponent<'p', ErrorProps>
}

export type InputGroupComponent<
  ComponentName extends keyof JSX.IntrinsicElements | React.ComponentType<any>,
  ComponentProps extends object
> = StyledComponent<ComponentName, any, ComponentProps, never>

export type HtmlInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

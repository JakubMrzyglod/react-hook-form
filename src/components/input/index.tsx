import React, { FC } from 'react'
import { InputGroupProps, Sizes } from '../wrapper/types'
import { InputGroup } from './input-group'
import { InputGroupComponents } from './types'

export const registerInputs = <
  T extends Record<string, Omit<InputGroupProps, 'sizes'>>
>(
  inputGroupComponent: InputGroupComponents,
  fields: T
) => {
  const Component = InputGroup(inputGroupComponent)
  const fieldKeys = Object.keys(fields)
  const inputs = fieldKeys.reduce(
    (resultInputs, key) => ({
      ...resultInputs,
      [key]: (sizes) => <Component {...{ sizes, ...fields[key] }} />
    }),
    {} as Record<keyof T, FC<Sizes>>
  )
  return inputs
}

import React, { FC } from 'react'
import { InputGroupProps } from '../wrapper/types'
import { InputGroup } from './input-group'
import { InputGroupComponents, RegisteredComponentProps } from './types'

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
      [key]: ({ arrayProps, ...sizes }) => (
        <Component {...{ arrayProps, sizes, ...fields[key] }} />
      )
    }),
    {} as Record<keyof T, FC<RegisteredComponentProps>>
  )
  return inputs
}

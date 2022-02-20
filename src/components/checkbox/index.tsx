import React, { FC } from 'react'
import { Sizes } from '../wrapper/types'
import { CheckboxGroup } from './checkbox-group'
import { CheckboxGroupComponents, CheckboxGroupProps } from './types'

export const registerCheckboxes = <
  T extends Record<string, Omit<CheckboxGroupProps, 'sizes'>>
>(
  checkboxGroupComponent: CheckboxGroupComponents,
  fields: T
) => {
  const Component = CheckboxGroup(checkboxGroupComponent)
  const fieldKeys = Object.keys(fields)
  const checkboxes = fieldKeys.reduce(
    (resultCheckboxes, key) => ({
      ...resultCheckboxes,
      [key]: (sizes) => <Component {...{ sizes, ...fields[key] }} />
    }),
    {} as Record<keyof T, FC<Sizes>>
  )
  return checkboxes
}

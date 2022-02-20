import React, { FC } from 'react'
import { Sizes } from '../wrapper/types'
import { ControllerGroup } from './controller-group'
import { ControllerGroupComponents, ControllerGroupProps } from './types'

export const registerControllers = <
  T extends Record<string, Omit<ControllerGroupProps, 'sizes'>>
>(
  controllerGroupComponent: ControllerGroupComponents,
  fields: T
) => {
  const Component = ControllerGroup(controllerGroupComponent)
  const fieldKeys = Object.keys(fields)
  const controllers = fieldKeys.reduce(
    (result, key) => ({
      ...result,
      [key]: (sizes) => <Component {...{ sizes, ...fields[key] }} />
    }),
    {} as Record<keyof T, FC<Sizes>>
  )
  return controllers
}

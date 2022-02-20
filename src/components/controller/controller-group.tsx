import React, { FC } from 'react'
import { useController, useFormContext } from 'react-hook-form'

import { BoxItem } from '../box/item'
import { ControllerGroupComponents, ControllerGroupProps } from './types'

export const ControllerGroup: (
  inputGroupComponent: ControllerGroupComponents
) => FC<ControllerGroupProps> =
  ({ Controller, Label, Error }: ControllerGroupComponents) =>
  ({ name, sizes, ...controllerProps }) => {
    const {
      control,
      formState: { errors }
    } = useFormContext()
    const useControllerProps = useController({
      ...controllerProps,
      name,
      control
    })
    const error = errors[name]?.message
    return (
      <BoxItem {...sizes}>
        {Label && <Label {...{ error }} />}
        <Controller {...useControllerProps} />
        {Error && <Error {...{ error }} />}
      </BoxItem>
    )
  }

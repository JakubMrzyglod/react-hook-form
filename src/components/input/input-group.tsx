import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import { BoxItem } from '../box/item'
import { InputGroupComponents, InputGroupProps } from './types'

export const InputGroup: (
  inputGroupComponent: InputGroupComponents
) => FC<InputGroupProps> =
  ({ Input, Label, Error }: InputGroupComponents) =>
  ({ name, sizes, label, ...inputProps }) => {
    const {
      register,
      formState: { errors }
    } = useFormContext()
    const error = errors[name]?.message
    return (
      <BoxItem {...sizes}>
        {Label && <Label {...{ error, children: label }} />}
        <Input {...{ ...inputProps, ...register(name) }} />
        {Error && <Error {...{ error }} />}
      </BoxItem>
    )
  }

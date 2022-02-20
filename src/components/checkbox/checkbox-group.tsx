import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'

import { BoxItem } from '../box/item'
import { CheckboxGroupComponents, CheckboxGroupProps } from './types'

export const CheckboxGroup: (
  inputGroupComponent: CheckboxGroupComponents
) => FC<CheckboxGroupProps> =
  ({ Checkbox, Label, Error }: CheckboxGroupComponents) =>
  ({ name, sizes, label, ...inputProps }) => {
    const {
      register,
      formState: { errors }
    } = useFormContext()
    const error = errors[name]?.message
    console.log(errors);
    return (
      <BoxItem {...sizes}>
        <Label {...{ error }}>
          {label}
          <Checkbox
            {...{ ...inputProps, ...register(name), type: 'checkbox' }}
          />
        </Label>
        {Error && <Error {...{ error }} />}
      </BoxItem>
    )
  }

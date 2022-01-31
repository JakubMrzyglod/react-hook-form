import React, { FC, useEffect } from 'react'
import { useFormContext } from 'react-hook-form'
import { InputError } from './styled/input-error'
import { InputGroup } from './styled/input-group'
import { InputLabel } from './styled/input-label'
import { InputWrapperProps } from './types'

export const InputWrapper: FC<InputWrapperProps> = ({
  Component,
  name,
  label,
  sizes,
  ...componentProps
}) => {
  const {
    register,
    formState: { errors },
    unregister
  } = useFormContext()
  label = label ?? name
  const error = errors[name]?.message
  useEffect(() => () => unregister(name), [])

  return (
    <InputGroup {...{ ...sizes }}>
      <InputLabel {...{ label }} />
      <Component {...{ label, error, ...register(name), ...componentProps }} />
      <InputError {...{ error }} />
    </InputGroup>
  )
}

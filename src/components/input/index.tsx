import React, { FC } from 'react'
import { InputWrapper } from '../wrapper'
import { InputField } from './styled/input-field'
import { TextInputProps } from './types'

export const Input: FC<TextInputProps> = (props) => (
  <InputWrapper {...{ ...props, Component: InputField }} />
)

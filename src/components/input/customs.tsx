import React from 'react'
import { Input } from '.'
import { Sizes } from '../wrapper/types'
import { TextInputProps } from './types'

const createInput = (props: TextInputProps) => (sizes: Sizes) =>
  <Input {...{ ...props, sizes }} />

export const MyInput = {
  Email: createInput({
    name: 'email',
    type: 'email',
    placeholder: 'example@email.com'
  }),
  Password: createInput({
    name: 'pass',
    type: 'password',
    placeholder: '********'
  })
}

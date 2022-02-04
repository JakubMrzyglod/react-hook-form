import React from 'react'
import {
  Form,
  BaseLabel,
  BaseError,
  BaseInput,
  registerInputs
} from '@jakubmrzyglod/react-hook-form'
import styled from 'styled-components'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'

const Input = styled(BaseInput)``

const Label = styled(BaseLabel)``

const Error = styled(BaseError)``

const schema = object().shape({
  firstName: string().required(),
  lastName: string().required()
})

export const resolver = yupResolver(schema)

const Inputs = registerInputs(
  { Input, Label, Error },
  {
    firstName: { name: 'firstName', label: 'First Name', placeholder: 'John' },
    lastName: { name: 'lastName', label: 'Last Name', placeholder: 'Smith' }
  }
)

export const App = () => {
  const submit = (data: any) => console.log(data)
  return (
    <Form {...{ submit, resolver, gap: 1 }}>
      <Inputs.firstName {...{ sm: 3 }} />
      <Inputs.lastName {...{ sm: 3 }} />
      <Inputs.firstName {...{ sm: 3 }} />
      <Inputs.lastName {...{ sm: 3 }} />
    </Form>
  )
}

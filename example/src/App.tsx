import React from 'react'
import { Form, Input } from 'react-hook-form'

export const App = () => {
  const submit = (data: any) => console.log(data)
  return (
    <Form {...{ submit }}>
      <Input {...{ name: 'firstName' }} />
      <Input {...{ name: 'lastName' }} />
      <button {...{ type: 'submit'}} >test</button>
    </Form>
  )
}

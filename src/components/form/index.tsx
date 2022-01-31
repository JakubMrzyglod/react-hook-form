import React, { FC, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { FormProps } from './types'

export const Form: FC<FormProps> = ({ children, submit }) => {
  const [value, setValue] = useState(0)
  const methods = useForm()
  const onSubmit = methods.handleSubmit(submit)
  return (
    <FormProvider {...methods}>
      <form {...{ onSubmit }}>{children}</form>
      <button {...{ onClick: () => setValue((prev) => prev + 1) }}>
        {value}
      </button>
    </FormProvider>
  )
}

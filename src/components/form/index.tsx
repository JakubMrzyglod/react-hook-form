import React, { FC } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { Box } from '../box'
import { FormProps } from './types'

export const Form: FC<FormProps> = ({
  submit,
  gap,
  children,
  ...useFormProps
}) => {
  const methods = useForm(useFormProps)
  const onSubmit = methods.handleSubmit(submit)
  return (
    <FormProvider {...methods}>
      <form {...{ onSubmit }}>
        <Box {...{ gap }}>{children}</Box>
      </form>
    </FormProvider>
  )
}

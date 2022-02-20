import { FC } from 'react-dom/node_modules/@types/react'
import { UseControllerProps, UseControllerReturn } from 'react-hook-form'
import { InputGroupComponents } from '../input/types'
import { Sizes } from '../wrapper/types'

export type ControllerGroupProps = {
  sizes: Sizes
} & Omit<UseControllerProps, 'control'>

export type ControllerGroupComponents = Omit<InputGroupComponents, 'Input'> & {
  Controller: FcController
}

export type FcController = FC<UseControllerReturn>

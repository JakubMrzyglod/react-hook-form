import React, { FC } from 'react'
import styled from 'styled-components'
import { boxContext } from './context'

type Props = {
  gap?: number
  border?: string
}

export const BoxProviderWrapper: FC<BoxContextProviderType> = ({
  children,
  gap
}) => {
  const value = { gap }
  return <Provider {...{ value }}>{children}</Provider>
}

export const Box = styled.div.attrs<BoxContextProviderType>((props) => ({
  children: <BoxProviderWrapper {...props} />
}))<Props>``

const Provider = boxContext.Provider

type BoxContextProviderType = { children: Node } & Props

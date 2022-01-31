import React, { FC } from 'react'
import styled from 'styled-components'
import { BoxContext } from './context'

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

export const Box = styled.div.attrs<BoxContextProviderType>(
  BoxProviderWrapper
)<Props>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ gap }) => gap ?? 0}rem;
  /* padding: 1.5rem;
  padding-right: ${({ gap }) => (gap ?? 0) - 1.5}rem; */ //TODO:
`

const Provider = BoxContext.Provider

type BoxContextProviderType = { children: Node } & Props

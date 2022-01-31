import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { BoxContext } from './context'
import { ItemProps } from './types'

export const ItemStyled = styled.div<ItemProps>`
  flex: 0 1
    ${({ xs, gap }) => `calc(${((xs ?? 12) / 12) * 100}% - ${gap ?? 0}rem)`};

  ${({ theme }) => theme.device.sm} {
    flex: 0 1
      ${({ xs, sm, gap }) =>
        `calc(${((sm ?? xs ?? 12) / 12) * 100}% - ${gap ?? 0}rem)`};
  }
  ${({ theme }) => theme.device.lg} {
    flex: 0 1
      ${({ xs, sm, lg, gap }) =>
        `calc(${((lg ?? sm ?? xs ?? 12) / 12) * 100}% - ${gap ?? 0}rem)`};
  }
`

export const BoxItem: FC<Omit<ItemProps, 'gap'>> = (props) => {
  const { gap } = useContext(BoxContext)
  return <ItemStyled {...{ ...props, gap }} />
}

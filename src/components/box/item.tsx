import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { boxContext } from './context'
import { ItemProps } from './types'

export const ItemStyled = styled.div<ItemProps>`
  display: inline-block;
  padding-right: ${({ gap }) => (gap ?? 0) / 2}rem;
  padding-left: ${({ gap }) => (gap ?? 0) / 2}rem;

  width: ${({ xs, gap }) =>
    `calc(${((xs ?? 12) / 12) * 100}% - ${gap ?? 0}rem)`};

  @media screen and (min-width: 768px) {
    width: ${({ xs, sm, gap }) =>
      `calc(${((sm ?? xs ?? 12) / 12) * 100}% - ${gap ?? 0}rem)`};
  }
  @media screen and (min-width: 1200px) {
    width: ${({ xs, sm, lg, gap }) =>
      `calc(${((lg ?? sm ?? xs ?? 12) / 12) * 100}% - ${gap ?? 0}rem)`};
  }
`

export const BoxItem: FC<Omit<ItemProps, 'gap'>> = (props) => {
  const { gap } = useContext(boxContext)
  return <ItemStyled {...{ ...props, gap }} />
}

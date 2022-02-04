import styled from 'styled-components'
import { ErrorProps } from '../types'

export const BaseError = styled.p.attrs<ErrorProps>(({ error }) => ({
  children: error
}))<ErrorProps>`
  color: red;
  color: #d92550;
`

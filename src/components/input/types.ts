import { InputGroupProps } from '../wrapper/types';

export type TextInputProps = {
  type?: 'password' | 'email' | 'number';
} & InputGroupProps;

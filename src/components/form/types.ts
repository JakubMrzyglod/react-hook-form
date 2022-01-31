import { UseFormProps } from 'react-hook-form';

export type FormProps = {
  submit: (data: any) => void;
  gap?: number;
} & UseFormProps;

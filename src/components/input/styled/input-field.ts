import styled from 'styled-components';

type InputFieldProps = {
  error?: string;
};

export const InputField = styled.input<InputFieldProps>`
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 0.625rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border: 1px solid #dee2e6;
  border-radius: 0.25rem;
  background-color: #fff;
  color: #495057;
  box-shadow: 0 1px 3px rgb(50 50 93 / 15%), 0 1px 0 rgb(0 0 0 / 2%);
  border-color: ${({ error }) => (error ? '#d92550' : '#dee2e6')};
  &:focus {
    outline: none !important;
    border-color: ${({ error }) => (error ? '#d92550' : '#5e72e4')};
    box-shadow: 0 3px 9px rgb(50 50 9 / 0%), 3px 4px 8px rgb(94 114 128 / 10%);
  }
  &::placeholder {
    color: #bdc1c4;
  }
`;

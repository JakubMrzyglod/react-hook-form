import styled from 'styled-components';

type InputErrorProps = {
  error?: string;
};

export const InputError = styled.div.attrs<InputErrorProps>(({ error }) => ({ children: error }))<InputErrorProps>`
  width: 100%;
  margin-top: 0.25rem;
  font-size: 0.75rem;
  color: #d92550;
  min-height: 1.5rem;
`;

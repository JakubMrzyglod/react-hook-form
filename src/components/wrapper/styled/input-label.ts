import styled from 'styled-components';

type InputLabelProps = {
  label: string;
};
export const InputLabel = styled.label.attrs<InputLabelProps>(({ label }) => ({
  children: upperFirst(label),
}))<InputLabelProps>`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: #525f7f;
`;

const upperFirst = (text: string) => text[0].toUpperCase() + text.slice(1);

import styled from 'styled-components';

export const ButtonElement = styled.button.attrs({
  type: 'button',
})`
  width: 100%;
  padding: 10px;
  text-align: center;
  margin-top: 20px;
  border: none;
  background: ${({ theme }) => theme.color.dark};
  color: ${({ theme }) => theme.color.light};
  font-size: ${({ theme }) => theme.size.midium};
`;

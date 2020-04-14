import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  input {
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.dark};
    background: transparent;
    padding: 5px;
    font-weight: 700;
    ${({ model }) => {
      if (model === 'login') {
        return css`
          font-size: ${({ theme }) => theme.size.medium};
          color: ${({ theme }) => theme.color.light};
        `;
      }
      return css`
        font-size: ${({ theme }) => theme.size.superLarge};
        color: ${({ theme }) => theme.color.dark};
        @media (max-width: 450px) {
          font-size: ${({ theme }) => theme.size.large};
        }
      `;
    }};
  }
`;
export const Label = styled.label`
  color: ${({ theme }) => theme.color.light};
  font-size: ${({ theme }) => theme.size.small};
  margin: 0 5px 15px;
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  input {
    background: transparent;
    border: none;
    padding: 5px;
    border-bottom: 1px solid ${({ theme }) => theme.color.dark};
    font-size: ${({ theme }) => theme.size.superLarge};
    color: ${({ theme }) => theme.color.dark};
    font-weight: 700;
  }
`;
export const Label = styled.label`
  color: ${({ theme }) => theme.color.light};
  font-size: ${({ theme }) => theme.size.small};
  margin: 5px;
`;

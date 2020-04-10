import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  small {
    color: ${({ theme }) => theme.color.dark};
    font-size: ${({ theme }) => theme.size.superSmall};
  }
`;
export const ButtonLink = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.color.light};
  font-size: ${({ theme }) => theme.size.superSmall};
  margin: 10px 0;
  &:hover {
    text-decoration: underline;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 230px;
  height: 230px;
`;

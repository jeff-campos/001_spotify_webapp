import styled from 'styled-components';

export const Content = styled.h2`
  font-size: ${({ theme }) => theme.size.large};
  color: ${({ theme }) => theme.color.clean};
  font-weight: 500;
  @media (max-width: 450px) {
    font-size: ${({ theme }) => theme.size.small};
  }
`;

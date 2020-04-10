import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  margin: 30px 0;
  span {
    color: ${({ theme }) => theme.color.clean};
    font-size: ${({ theme }) => theme.size.small};
  }
  img {
    transform: rotate(180deg);
    margin-right: 10px;
  }
`;

import styled from 'styled-components';

export const Container = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: none;
  margin: 20px 0 50px 0;
  @media (max-width: 768px) {
    position: fixed;
    top: 30px;
    right: 20px;
  }
  span {
    color: ${({ theme }) => theme.color.clean};
    font-size: ${({ theme }) => theme.size.small};
  }
  img {
    transform: rotate(180deg);
    margin-right: 10px;
  }
`;

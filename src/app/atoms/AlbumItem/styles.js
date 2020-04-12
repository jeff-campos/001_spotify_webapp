import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: relative;
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

export const Splash = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -10px;
  top: -10px;
  padding: 5px 10px;
  background: ${({ theme }) => theme.color.dark};
  color: ${({ theme }) => theme.color.clean};
  font-size: ${({ theme }) => theme.size.small};
`;

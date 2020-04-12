import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: relative;
  padding: 25px;
  transition: background 0.4s ease;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
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
  max-width: 250px;
  cursor: pointer;
`;

export const Splash = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 10%;
  padding: 5px;
  border-radius: 4px 0 4px 0;
  background: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.dark};
  font-size: ${({ theme }) => theme.size.superSmall};
`;

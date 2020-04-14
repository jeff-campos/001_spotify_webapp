import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  position: relative;
  transition: all 0.2s linear;
  &:hover {
    background: rgba(0, 0, 0, 0.5);
    padding: 15px;
    img {
      border-radius: 100%;
    }
  }
  small {
    color: ${({ theme }) => theme.color.dark};
    font-size: ${({ theme }) => theme.size.medium};
    @media (max-width: 450px) {
      font-size: ${({ theme }) => theme.size.superSmall};
    }
  }
  animation: ${animate} 0.4s linear;
`;
export const ButtonLink = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.color.light};
  font-size: ${({ theme }) => theme.size.medium};
  margin: 10px 0;
  @media (max-width: 450px) {
    font-size: ${({ theme }) => theme.size.superSmall};
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const Image = styled.img`
  transition: all 0.2s linear;
  width: 100%;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 200px;
  }
`;

export const Splash = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 5px;
  top: 5px;
  padding: 5px;
  border-radius: 4px 0 4px 0;
  background: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.dark};
  font-size: ${({ theme }) => theme.size.superSmall};
`;

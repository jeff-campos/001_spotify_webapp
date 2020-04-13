import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  from {
    opacity: 0;
    transform: translateY(100%);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

export const Container = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${({ theme }) => theme.color.black};
  left: 0;
  bottom: 0;
  padding: 10px 80px;
  animation: ${animate} 0.3s ease-in;
  img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
  }
`;
export const AlbumContent = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 20%;
  & > div {
    display: flex;
    flex-flow: column nowrap;
    margin-left: 15px;
    span {
      font-weight: 700;
      font-size: ${({ theme }) => theme.size.small};
      margin-bottom: 5px;
    }
    small {
      font-size: ${({ theme }) => theme.size.superSmall};
    }
  }
`;
export const AudioContent = styled.div`
  flex-basis: 33%;
`;

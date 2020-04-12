import styled from 'styled-components';

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

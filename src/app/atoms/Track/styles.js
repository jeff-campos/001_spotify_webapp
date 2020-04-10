import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
`;

export const Line = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const NameTrack = styled.div`
  flex-basis: 90%;
  button {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.color.clean};
    font-size: ${({ theme }) => theme.size.small};
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const Lot = styled.div`
  flex-basis: 5%;
  font-size: ${({ theme }) => theme.size.small};
  text-align: center;
`;

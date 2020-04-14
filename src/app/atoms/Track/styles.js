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
  @media (max-width: 450px) {
    flex-basis: 100%;
  }
  button {
    background: transparent;
    border: none;
    text-align: left;
    color: ${({ theme }) => theme.color.clean};
    font-size: ${({ theme }) => theme.size.small};
    @media (max-width: 450px) {
      font-size: ${({ theme }) => theme.size.superSmall};
      text-align: left;
    }
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

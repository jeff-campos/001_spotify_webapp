import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 15px 0 0 30px;
  @media (max-width: 768px) {
    margin: 30px 0;
    width: 100%;
  }
`;

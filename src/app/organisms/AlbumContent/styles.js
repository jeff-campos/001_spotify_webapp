import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr;
  gap: 30px;
  @media (max-width: 768px) {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

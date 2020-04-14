import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 30px;
  margin: 30px 0;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 20px 0;
  }
  @media (max-width: 580px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 20px 0;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-top: 30px;
  margin-bottom: 150px;
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 80%;
  padding: 0 20px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

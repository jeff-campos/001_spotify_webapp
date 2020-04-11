import styled from 'styled-components';
import Bg from '../../assets/img/bg2.jpg';

export const Container = styled.div`
  display: flex;
  padding-top: 30px;
  background: url(${Bg}) no-repeat;
  background-size: cover;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 80%;
  padding: 0 20px;
`;

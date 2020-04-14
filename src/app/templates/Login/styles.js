import styled from 'styled-components';
import Bg from '../../assets/img/bg3.jpg';
import BgMobile from '../../assets/img/mobile.jpg';

export const Container = styled.div`
  display: flex;
  padding-top: 30px;
  background: url(${Bg}) no-repeat;
  background-size: cover;
  align-items: flex-start;
  height: 100vh;
  @media (max-width: 768px) {
    background: url(${BgMobile}) no-repeat;
    background-size: cover;
    flex-flow: column nowrap;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  max-width: 450px;
  margin: 0 30px;
  padding: 50px;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 15px 0 15px 0;
  align-items: flex-start;
  @media (max-width: 450px) {
    padding: 30px;
  }
`;

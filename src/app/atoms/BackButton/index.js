import React from 'react';

import Arrow from '../../assets/svg/arrow.svg';
import { Container } from './styles';

export default function BackButton({ action }) {
  return (
    <Container onClick={() => action()}>
      <img src={Arrow} width={25} height={25} alt="Back Button" />
      <span>voltar</span>
    </Container>
  );
}

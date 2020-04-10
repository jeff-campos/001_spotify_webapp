import React from 'react';

import { Container } from './styles';
import Logo from '../../assets/svg/logo-spotify.svg';

export default function Brand() {
  return (
    <Container>
      <img src={Logo} width={70} height={70} alt="Brand Spotify" />
    </Container>
  );
}

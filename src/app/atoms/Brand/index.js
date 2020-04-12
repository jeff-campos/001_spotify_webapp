import React from 'react';

import { Container } from './styles';
import Logo from '../../assets/svg/logo-spotify.svg';
import LoadingGif from '../../assets/img/loading.gif';

export default function Brand({ loading = false }) {
  return (
    <Container>
      {loading ? (
        <img src={LoadingGif} width={70} height={70} alt="Loading" />
      ) : (
        <img src={Logo} width={70} height={70} alt="Brand Spotify" />
      )}
    </Container>
  );
}

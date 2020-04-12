import React from 'react';

import { Container, ButtonLink, Image, Splash } from './styles';

export default function AlbumItem({ id, album, img, artist, type }) {
  return (
    <Container>
      <Splash>{type}</Splash>
      <Image src={img} alt={album} />
      <ButtonLink onClick={() => console.log(id)}>{album}</ButtonLink>
      <small>{artist}</small>
    </Container>
  );
}

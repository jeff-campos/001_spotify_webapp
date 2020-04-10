import React from 'react';

import { Container, ButtonLink, Image } from './styles';

export default function AlbumItem({ artist, name, image }) {
  return (
    <Container>
      <Image src={image} alt={name} />
      <ButtonLink>{name}</ButtonLink>
      <small>{artist}</small>
    </Container>
  );
}

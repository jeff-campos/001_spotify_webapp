import React from 'react';

import { Container } from './styles';

import AlbumItem from '../../atoms/AlbumItem';

import Tracks from '../../molecules/Tracks';

export default function AlbumContent() {
  const item = {
    artist: 'Bruno Mars',
    name: 'Colores',
    image: 'https://api.adorable.io/avatars/200/abott@adorable.png',
  };
  return (
    <Container>
      <AlbumItem {...item} />
      <Tracks />
    </Container>
  );
}

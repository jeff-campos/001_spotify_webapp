import React from 'react';

import { Container } from './styles';

import AlbumItem from '../../atoms/AlbumItem';

import Tracks from '../../molecules/Tracks';

export default function AlbumContent({ tracks, album }) {
  return (
    <Container>
      <AlbumItem {...album} />
      <Tracks tracks={tracks} />
    </Container>
  );
}

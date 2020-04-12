import React from 'react';
import Track from '../../atoms/Track';
import { Container } from './styles';

export default function Tracks({ tracks }) {
  return (
    <Container>
      {tracks.map(track => (
        <Track key={track.track_number} {...track} />
      ))}
    </Container>
  );
}

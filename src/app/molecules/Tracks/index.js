import React from 'react';
import Track from '../../atoms/Track';
import { Container } from './styles';

export default function Tracks({ tracks, action }) {
  return (
    <Container>
      {tracks.map(track => (
        <Track
          {...track}
          key={track.track_number}
          action={data => action(data)}
        />
      ))}
    </Container>
  );
}

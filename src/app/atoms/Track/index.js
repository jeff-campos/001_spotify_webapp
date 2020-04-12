import React from 'react';

import { Container, Line, NameTrack, Lot } from './styles';
import { millisToMin } from '../../helpers/formatData';

export default function Track({
  track_number,
  duration_ms,
  preview_url,
  name,
}) {
  return (
    <Container>
      <Line>
        <Lot>{track_number}</Lot>
        <NameTrack>
          <button type="button">{name}</button>
        </NameTrack>
        <Lot>{millisToMin(duration_ms)}</Lot>
      </Line>
    </Container>
  );
}

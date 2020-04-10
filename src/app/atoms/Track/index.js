import React from 'react';

import { Container, Line, NameTrack, Lot } from './styles';

export default function Track({ number, name, time }) {
  return (
    <Container>
      <Line>
        <Lot>{number}</Lot>
        <NameTrack>
          <button type="button">{name}</button>
        </NameTrack>
        <Lot>{time}</Lot>
      </Line>
    </Container>
  );
}

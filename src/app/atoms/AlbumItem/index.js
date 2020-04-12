import React from 'react';

import { Container, ButtonLink, Image, Splash } from './styles';

import history from '../../services/history';

export default function AlbumItem({ id, album, img, artist, type }) {
  return (
    <Container>
      {type && <Splash>{type}</Splash>}
      <Image
        src={img}
        alt={album}
        onClick={() => history.push(`/album/${id}`)}
      />
      <ButtonLink onClick={() => history.push(`/album/${id}`)}>
        {album}
      </ButtonLink>
      <small>{artist}</small>
    </Container>
  );
}

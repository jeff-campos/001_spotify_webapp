import React from 'react';
import Title from '../../atoms/Title';
import AlbumList from '../../molecules/AlbumList';

import { Container } from './styles';

export default function List({ title }) {
  return (
    <Container>
      <Title text={title} />
      <AlbumList />
    </Container>
  );
}

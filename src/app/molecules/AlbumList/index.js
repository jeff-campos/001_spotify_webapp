import React from 'react';
import { Container } from './styles';
import AlbumItem from '../../atoms/AlbumItem';

export default function AlbumList({ items }) {
  return (
    <Container>
      {items.map((element, index) => (
        <AlbumItem
          key={`${index + 1}-${element.artist}-${element.id}`}
          {...element}
        />
      ))}
    </Container>
  );
}

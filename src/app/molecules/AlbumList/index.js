import React from 'react';
import { Container } from './styles';
import AlbumItem from '../../atoms/AlbumItem';

export default function AlbumList() {
  const items = [
    {
      artist: 'Bruno Mars',
      name: 'Rones',
      image: 'https://api.adorable.io/avatars/200/abott@adorable.png',
    },
    {
      artist: 'Bruno Mars',
      name: 'Fitness',
      image: 'https://api.adorable.io/avatars/200/abott@adorable.png',
    },
    {
      artist: 'Bruno Mars',
      name: 'Aleluia',
      image: 'https://api.adorable.io/avatars/200/abott@adorable.png',
    },
    {
      artist: 'Bruno Mars',
      name: 'Atoms',
      image: 'https://api.adorable.io/avatars/200/abott@adorable.png',
    },
    {
      artist: 'Bruno Mars',
      name: 'Meniss',
      image: 'https://api.adorable.io/avatars/200/abott@adorable.png',
    },
    {
      artist: 'Bruno Mars',
      name: 'AltNess',
      image: 'https://api.adorable.io/avatars/200/abott@adorable.png',
    },
    {
      artist: 'Bruno Mars',
      name: 'Colores',
      image: 'https://api.adorable.io/avatars/200/abott@adorable.png',
    },
  ];
  return (
    <Container>
      {items.map(element => (
        <AlbumItem key={element.name} {...element} />
      ))}
    </Container>
  );
}

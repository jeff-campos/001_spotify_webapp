import React from 'react';
import Track from '../../atoms/Track';
import { Container } from './styles';

export default function Tracks() {
  const tracks = [
    {
      number: '1',
      name: 'Nome da Faixa',
      time: '3:21',
    },
    {
      number: '2',
      name: 'Nome da Faixa',
      time: '3:21',
    },
    {
      number: '3',
      name: 'Nome da Faixa',
      time: '3:21',
    },
    {
      number: '4',
      name: 'Nome da Faixa',
      time: '3:21',
    },
    {
      number: '5',
      name: 'Nome da Faixa',
      time: '3:21',
    },
    {
      number: '6',
      name: 'Nome da Faixa',
      time: '3:21',
    },
    {
      number: '7',
      name: 'Nome da Faixa',
      time: '3:21',
    },
    {
      number: '8',
      name: 'Nome da Faixa',
      time: '3:21',
    },
    {
      number: '9',
      name: 'Nome da Faixa',
      time: '3:21',
    },
    {
      number: '10',
      name: 'Nome da Faixa',
      time: '3:21',
    },
    {
      number: '11',
      name: 'Nome da Faixa',
      time: '3:21',
    },
    {
      number: '12',
      name: 'Nome da Faixa',
      time: '3:21',
    },
  ];
  return (
    <Container>
      {tracks.map(track => (
        <Track {...track} />
      ))}
    </Container>
  );
}

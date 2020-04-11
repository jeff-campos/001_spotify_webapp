import React from 'react';
import Theme from '../theme';
import Brand from '../../atoms/Brand';

import Input from '../../atoms/Input';
import List from '../../organisms/List';

import { Container, Content } from './styles';

export default function Home() {
  return (
    <Theme>
      <Container>
        <Brand />
        <Content>
          <Input
            model="large"
            placeholder="Comece a escrever"
            label="Busque por artista, álbuns ou músicas"
            action={text => {
              console.log(text);
            }}
          />
          <List title="Ábuns buscados recentimente" />
        </Content>
      </Container>
    </Theme>
  );
}

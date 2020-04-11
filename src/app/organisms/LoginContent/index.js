import React from 'react';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

import { Container } from './styles';

export default function LoginContent() {
  return (
    <Container>
      <Input
        placeholder="Entre com sua chave..."
        label="Login Spotify"
        model="login"
      />
      <Button label="Entrar" />
    </Container>
  );
}

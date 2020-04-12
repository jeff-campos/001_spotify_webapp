import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Theme from '../theme';
import Brand from '../../atoms/Brand';
import Input from '../../atoms/Input';
import Button from '../../atoms/Button';

import { signInRequest } from '../../../store/modules/auth/actions';

import { Container, Content } from './styles';

export default function LoginContent() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  function handleSubmit() {
    dispatch(signInRequest(value));
  }

  return (
    <Theme>
      <Container>
        <Brand />
        <Content>
          <Input
            placeholder="Entre com sua chave..."
            label="Login Spotify"
            model="login"
            action={text => setValue(text)}
          />
          <Button label="Entrar" action={handleSubmit} />
        </Content>
      </Container>
    </Theme>
  );
}

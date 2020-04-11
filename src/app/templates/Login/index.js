import React from 'react';
import Theme from '../theme';
import Brand from '../../atoms/Brand';
import LoginContent from '../../organisms/LoginContent';

import { Container, Content } from './styles';

export default function Home() {
  return (
    <Theme>
      <Container>
        <Brand />
        <Content>
          <LoginContent />
        </Content>
      </Container>
    </Theme>
  );
}

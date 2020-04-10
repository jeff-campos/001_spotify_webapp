import React from 'react';
import Theme from '../theme';
import Brand from '../../atoms/Brand';
import AlbumContent from '../../organisms/AlbumContent';
import BackButtom from '../../atoms/BackButton';
import { Container, Content } from './styles';

export default function AlbumTemplate() {
  return (
    <Theme>
      <Container>
        <Brand />
        <Content>
          <BackButtom />
          <AlbumContent />
        </Content>
      </Container>
    </Theme>
  );
}

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Theme from '../theme';
import Brand from '../../atoms/Brand';
import AlbumContent from '../../organisms/AlbumContent';
import BackButtom from '../../atoms/BackButton';
import { Container, Content } from './styles';
import api from '../../services/api';
import history from '../../services/history';
import { handleFormatAlbum } from '../../helpers/formatData';

export default function AlbumTemplate() {
  const [album, setAlbum] = useState({});
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const response = await api.get(`albums/${id}`);
      setAlbum(handleFormatAlbum(response.data));
    })();
  }, [id]);

  return (
    <Theme>
      <Container>
        <Brand />
        {album.tracks && (
          <Content>
            <BackButtom action={() => history.push('/home')} />
            <AlbumContent {...album} />
          </Content>
        )}
      </Container>
    </Theme>
  );
}

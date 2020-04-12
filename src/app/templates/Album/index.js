import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import Theme from '../theme';
import Brand from '../../atoms/Brand';
import AlbumContent from '../../organisms/AlbumContent';
import BackButtom from '../../atoms/BackButton';
import { Container, Content } from './styles';
import api from '../../services/api';
import history from '../../services/history';
import { handleFormatAlbum } from '../../helpers/formatData';

import { signOut } from '../../../store/modules/auth/actions';
import { userSetAlbum } from '../../../store/modules/historic/actions';

export default function AlbumTemplate() {
  const [album, setAlbum] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(`albums/${id}`);
        setAlbum(handleFormatAlbum(response.data));
        dispatch(userSetAlbum(handleFormatAlbum(response.data)));
      } catch (err) {
        const {
          data: {
            error: { status },
          },
        } = err.response;
        dispatch(signOut(status));
      }
    })();
  }, [dispatch, id]);

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

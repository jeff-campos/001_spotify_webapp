import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

import Theme from '../theme';

import Brand from '../../atoms/Brand';
import AlbumContent from '../../organisms/AlbumContent';
import BackButtom from '../../atoms/BackButton';

import api from '../../services/api';
import history from '../../services/history';

import { handleFormatAlbum } from '../../helpers/formatData';

import { signOut } from '../../../store/modules/auth/actions';
import { userSetAlbum } from '../../../store/modules/historic/actions';

import { Container, Content } from './styles';

export default function AlbumTemplate() {
  const [loading, setLoading] = useState(false);
  const [album, setAlbum] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      setLoading(true);
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
      setLoading(false);
    })();
  }, [dispatch, id]);

  return (
    <Theme>
      <Container>
        <Brand loading={loading} />
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

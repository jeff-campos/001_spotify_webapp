import React, { useState, useMemo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Theme from '../theme';
import Brand from '../../atoms/Brand';

import Input from '../../atoms/Input';
import List from '../../organisms/List';

import { handleFormatData } from '../../helpers/formatData';
import { searchRequest } from '../../../store/modules/historic/actions';

import { Container, Content } from './styles';

export default function Home() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const { userAlbuns, loading, latestSearch: albums } = useSelector(
    state => state.historic
  );

  useEffect(() => {
    if (value) {
      dispatch(searchRequest(value));
    }
  }, [dispatch, value]);

  const propsList = useMemo(() => {
    if (albums && !albums.data && !value) {
      return {
        title: '',
        items: [],
      };
    }
    if (albums && albums.data && !value) {
      return {
        title: 'Álbuns e músicas buscados recentemente',
        items: handleFormatData(albums.data),
      };
    }

    return {
      title: `Principais resultados encontrados para: ${value}`,
      items: handleFormatData(albums.data),
    };
  }, [albums, value]);

  const propsUserAlbuns = useMemo(() => {
    if (!userAlbuns.length > 0) {
      return {
        title: '',
        items: [],
      };
    }
    return {
      title: 'Álbuns que você visitou',
      items: userAlbuns,
    };
  }, [userAlbuns]);

  return (
    <Theme>
      <Container>
        <Brand loading={loading} />
        <Content>
          <Input
            model="large"
            placeholder="Comece a escrever..."
            label="Busque por artista, álbuns ou música"
            action={text => setValue(text)}
          />
          {!value && <List {...propsUserAlbuns} />}
          <List {...propsList} />
        </Content>
      </Container>
    </Theme>
  );
}

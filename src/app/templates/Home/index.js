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
  const items = useSelector(state => state.historic.latestSearch);

  useEffect(() => {
    if (value) {
      dispatch(searchRequest(value));
    }
  }, [dispatch, value]);

  const propsList = useMemo(() => {
    if (!items.data && !value) {
      return {
        title: '',
        items: [],
      };
    }
    if (items.data && !value) {
      return {
        title: 'Álbuns buscados recentemente',
        items: handleFormatData(items.data),
      };
    }
    return {
      title: `Principais resultados encontrados para: ${value}`,
      items: handleFormatData(items.data),
    };
  }, [items.data, value]);

  return (
    <Theme>
      <Container>
        <Brand />
        <Content>
          <Input
            model="large"
            placeholder="Comece a escrever"
            label="Busque por artista, álbuns ou música"
            action={text => setValue(text)}
          />
          {items.data && <List {...propsList} />}
        </Content>
      </Container>
    </Theme>
  );
}

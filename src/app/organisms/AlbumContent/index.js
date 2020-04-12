import React, { useState } from 'react';
import { Container } from './styles';
import AlbumItem from '../../atoms/AlbumItem';
import Tracks from '../../molecules/Tracks';

import PreviewControl from '../../atoms/PreviewControl';

export default function AlbumContent({ tracks, album }) {
  const [dataPreview, setDataPreview] = useState({});

  return (
    <Container>
      <AlbumItem {...album} />
      <Tracks tracks={tracks} action={data => setDataPreview(data)} />
      {dataPreview.preview_url && (
        <PreviewControl {...album} {...dataPreview} />
      )}
    </Container>
  );
}

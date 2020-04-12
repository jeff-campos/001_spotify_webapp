import React, { useRef, useEffect } from 'react';
import { Container, AlbumContent, AudioContent } from './styles';
import Logo from '../../assets/svg/logo-spotify.svg';

export default function PreviewControl({ img, artist, preview_url, name }) {
  const audio = useRef(null);

  function onTrackChange() {
    audio.current.pause();
    audio.current.load();
    audio.current.play();
  }

  useEffect(() => {
    onTrackChange(preview_url);
  }, [preview_url]);

  return (
    <Container>
      <AlbumContent>
        <img src={img} alt="Nome" />
        <div>
          <span>{name}</span>
          <small>{artist}</small>
        </div>
      </AlbumContent>

      <AudioContent>
        <audio controls="controls" autoPlay ref={audio}>
          <source type="audio/mpeg" src={preview_url} />
        </audio>
      </AudioContent>

      <img src={Logo} alt="Spotify" />
    </Container>
  );
}

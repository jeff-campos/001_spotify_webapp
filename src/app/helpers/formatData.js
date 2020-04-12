const dataFake = {
  img: 'https://dummyimage.com/200x200/000/ffffff.jpg&text=Sem+imagem',
  album: 'Álbum sem nome',
  artist: 'Sem nome do artista',
};

export function handleFormatData(data) {
  const tracks = data
    ? data.tracks.items.map(({ album, type, artists }) => ({
        type,
        id: album.id,
        album: album.name,
        img: album.images[0].url || dataFake.img,
        artist: artists[0].name || dataFake.artist,
      }))
    : [];

  const albums = data
    ? data.albums.items.map(({ name, id, type, images, artists }) => ({
        type,
        id,
        album: name,
        img: images[0].url || dataFake.img,
        artist: artists[0].name || dataFake.artist,
      }))
    : [];

  return [...albums, ...tracks];
}

export function handleFormatAlbum(data) {
  const tracks = data
    ? data.tracks.items.map(
        ({ track_number, duration_ms, preview_url, name }) => ({
          track_number,
          duration_ms,
          preview_url,
          name,
        })
      )
    : [];
  const album = data
    ? {
        id: data.id,
        type: false,
        album: data.name,
        img: data.images[0].url || dataFake.img,
        artist: data.artists[0].name || dataFake.name,
      }
    : {};

  return {
    tracks,
    album,
  };
}

export function millisToMin(millis) {
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

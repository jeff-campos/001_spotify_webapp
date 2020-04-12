export function handleFormatData(data) {
  const tracks = data
    ? data.tracks.items.map(({ album, type, artists }) => ({
        type,
        id: album.id,
        album: album.name,
        img: album.images[0].url,
        artist: artists[0].name,
      }))
    : [];

  const albums = data
    ? data.albums.items.map(({ name, id, type, images, artists }) => ({
        type,
        id,
        album: name,
        img: images[0].url,
        artist: artists[0].name,
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
        type: false,
        album: data.name,
        img: data.images[0].url,
        artist: data.artists[0].name,
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

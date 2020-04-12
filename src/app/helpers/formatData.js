export default function handleFormatData(data) {
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

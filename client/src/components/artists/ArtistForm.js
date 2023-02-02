import { useState, useEffect } from 'react';

const ArtistForm = ({ addArtist, id, artist_name, desc, plays_artist, updateArtist, setEdit }) => {
  const [artist, setArtist] = useState({ artist_name: '', desc: '' })

  useEffect( () => {
    if (id) {
      setArtist({ artist_name, desc, plays_artist })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateArtist(id, artist)
      setEdit(false)
    } else {
      addArtist(artist)
    }
    setArtist({ artist_name: '', desc: '' , plays_artist: ''})
  }

  return (
    <>
      <h1>{id ? 'Update' : 'Create'} Artist</h1>
      <form onSubmit={handleSubmit}>
        <label>Artist name</label>
        <input
          name='artist_name'
          value={artist.artist_name}
          onChange={(e) => setArtist({...artist, artist_name: e.target.value })}
          required
        />
        <label>description</label>
        <input
          name='desc'
          value={artist.desc}
          onChange={(e) => setArtist({...artist, desc: e.target.value })}
          required
          />
        <label>Artist Plays</label>
        <input
          name='plays_artist'
          value={artist.plays_artist}
          onChange={(e) => setArtist({...artist, plays_artist: e.target.value })}
          required
          />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ArtistForm;
import { useState, useEffect } from 'react';

const SongForm = ({ addSong, id, song_title, song_desc, artist_id, fav, updateSong, setEdit }) => {
  const [song, setSong] = useState({ song_title: '', song_desc: '', artist_id: '', fav: false })

  useEffect( () => {
    if (id) {
      setSong({ song_title, song_desc, artist_id, fav })
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateSong(id, song)
      setEdit(false)
    } else {
      addSong(song)
    }
    setSong({ song_title: '', song_desc: '', artist_id: '', fav: false})
  }

  return (
    <>
      <h1>{id ? 'Update' : 'Create'} Song</h1>
      <form onSubmit={handleSubmit}>
        <label>Song Title</label>
        <input
          name='song_title'
          value={song.song_title}
          onChange={(e) => setSong({...song, song_title: e.target.value })}
          required
        />
        <label>Song Description</label>
        <input
          name='song_desc'
          value={song.song_desc}
          onChange={(e) => setSong({...song, song_desc: e.target.value })}
          required
          />
        <label>Artist ID</label>
        <input
          name='artist_id'
          value={song.artist_id}
          onChange={(e) => setSong({...song, artist_id: e.target.value })}
          required
          />
        <label>Fav</label>
        <input
          name='fav'
          type='checkbox'
          checked={song.fav}
          onChange={(e) => setSong({...song, fav: e.target.checked})}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default SongForm;

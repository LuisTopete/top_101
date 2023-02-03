import { useState } from 'react';
import SongForm from './SongForm';

const SongShow = ({ id, song_name, desc, plays_song, fav, updateSong, deleteSong }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {
        editing ?
          <>
            <SongForm 
              id={id}
              song_name={song_name}
              desc={desc}
              plays_song={plays_song}
              fav={fav}
              setEdit={setEdit}
              updateSong={updateSong}
            />
            <button
              onClick={() => setEdit(false)}
            >
              Cancel
            </button>
          </>
        :
          <>
            <h3>{song_name}</h3>
            <p>{desc}</p>
            <p>{plays_song}</p>
            <p>{fav ? 'This song is a favorite' : 'This song is not a favorite'}</p>
            <button
              onClick={() => setEdit(true)}
            >
              Edit
            </button>
            <button
              onClick={() => deleteSong(id)}
            >
              Delete
            </button>
          </>
      }
    </>
  )
}

export default SongShow;

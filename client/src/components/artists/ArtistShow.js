import { useState } from 'react';
import ArtistForm from './ArtistForm';

const ArtistShow = ({ id, artist_name, desc, plays_artist, updateArtist, deleteArtist }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      {
        editing ?
        <>
          <ArtistForm 
            id={id}
            artist_name={artist_name}
            desc={desc}
            plays_artist={plays_artist}
            setEdit={setEdit}
            updateArtist={updateArtist}
          />
          <button
            onClick={() => setEdit(false)}
          >
            Cancel
          </button>
        </>
        :
        <>
          <h3>{artist_name}</h3>
          <p>{desc}</p>
          <p>{plays_artist}</p>
          <button
            onClick={() => setEdit(true)}
          >
            Edit
          </button>
          <button
            onClick={() => deleteArtist(id)}
          >
            Delete
          </button>
        </>
      }
    </>
  )
}

export default ArtistShow;
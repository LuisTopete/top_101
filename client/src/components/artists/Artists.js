import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import ArtistList from './ArtistList';
import ArtistForm from './ArtistForm';

const Artists = () => {
  const [artists, setArtists] = useState([])
  const { billboardId } = useParams()
  const location = useLocation()
  const { artist_name } = location.state

  useEffect( () => {
    axios.get(`/api/billboards/${billboardId}/artists`)
      .then(res => setArtists(res.data))
      .catch(err => console.log(err))
  }, [])

  const addArtist = (artist) => {
    axios.post(`/api/billboards/${billboardId}/artists`, { artist })
      .then( res => setArtists([...artists, res.data]))
      .catch(err => console.log(err))
  }

  const updateArtist = (id, artist) => {
    axios.put(`/api/billboards/${billboardId}/artists/${id}`, { artist })
      .then( res => {
        const newUpdatedArtists = artists.map( t => {
          if ( t.id === id) {
            return res.data
          }
          return t
        })
        setArtists(newUpdatedArtists)
      })
      .catch(err => console.log(err))
  }

  const deleteArtist = (id) => {
    axios.delete(`/api/billboards/${billboardId}/artists/${id}`)
      .then(res => setArtists( artists.filter( t => t.id !== id )))
      .catch(err => console.log(err))
  }

  return (
    <>
      <ArtistForm addArtist={addArtist} />
      <h1>{artist_name} Artists</h1>
      <ArtistList 
        artists={artists}
        updateArtist={updateArtist}
        deleteArtist={deleteArtist}
      />
    </>
  )
}

export default Artists
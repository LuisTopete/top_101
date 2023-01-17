import { useEffect, useState } from "react";


const BillboardsForm = ({ addBillboards, id, artist_name, genre, updateBillboards, setEdit})  => {
  const [billboard, setBillboards] = useState({artist_name:'', genre:''})

 useEffect( () => {
  if (id) {
    setBillboards({artist_name, genre})
  }
 },[])
 

const handleSubmit = (e) => {
  e.preventDefault()
  if (id) {
updateBillboards(id ,billboard)
setEdit(false)
  } else {
    addBillboards(billboard)
  }
  setBillboards({ artist_name:'', genre:''})

}

return (
  <>
    <h1>{id ? 'Update' : 'Create'}Artist</h1>
    <form onSubmit={handleSubmit}>
      <label>Artist</label>
      <input 
        name='artist_name'
        value={billboard.artist_name}
        onChange={(e) => setBillboards({ ...billboard, artist_name: e.target.value })}
        required
      />
      <label>Genre</label>
      <input
        name='genre'
        value={billboard.genre}
        onChange={(e) => setBillboards({ ...billboard, genre: e.target.value })}
        required
      />
      <button type='submit'>Submit</button>
    </form>
  </>
)
}

export default BillboardsForm;
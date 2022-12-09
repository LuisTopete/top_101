import { useState } from "react";
import Billboards from "./Billboards";

const BillboardsForm = ({ addBillboards})  => {
  const [billboards, setBillboards] = useState ({genre: '', artist_name: ''})

 
const handleSubmit = (e) => {
  e.preventDefault()
  addBillboards(billboards)
  setBillboards({genre: '', artist_name: ''})

}

return (
  <>
    <h1> Artist</h1>
    <form onSubmit={handleSubmit}>
      <label>Artist</label>
      <input 
        name='artist_name'
        value={billboards.artist_name}
        onChange={(e) => setBillboards({ ...billboards, artist_name: e.target.value })}
        required
      />
      <label>Genre</label>
      </form>
      <form>
      <input
        name='genre'
        value={Billboards.genre}
        onChange={(e) => setBillboards({ ...billboards, genre: e.target.value })}
        required
      />
      <button type='submit'>Submit</button>
    </form>
  </>
)
}

export default BillboardsForm;
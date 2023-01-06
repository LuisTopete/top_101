import { useState } from "react";
import BillboardsForm from "./BillboardsForm";
const BillboardsShow = ({id, genre, artist_name, updateBillboards, deleteBillboards}) => {

const [editing, setEdit] = useState(false)


  return (
  <>
  { 
  editing ? 
  <>
  <BillboardsForm
  id={id}
  artist_name={artist_name}
  genre={genre}
  updateBillboards={updateBillboards}
  setEdit={setEdit}
  />
  <button onClick={()=> setEdit(false)}>
    Cancel
  </button>
  </>
  :
  <>
  <h3>
    {artist_name} {genre}
  </h3>
    <button onClick={() => setEdit(true)}>
      Edit
    </button>
    <button onClick={() => deleteBillboards(id)}>
      Delete
     </button>
    </>
}
  </>
)
}

export default BillboardsShow;
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
  id={artist_name}
  title={artist_name}
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
    {artist_name}
  </h3>
    <button onClick={() => setEdit(true)}>
    Edit
    </button>

    <button onClick={() => deleteBillboards(id)}>delete</button>
    <h4>
    {genre}
    </h4>
    <button onClick={() => setEdit(true)}>
    Edit
    </button>
    <button>delete</button>
    </>
}
  </>
)
}

export default BillboardsShow;
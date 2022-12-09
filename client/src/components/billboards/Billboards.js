import { useState,useEffect } from "react";
import axios from 'axios';
import BillboardsForm from './BillboardsForm';
import BillboardsLists from "./BillboardsLists";

const Billboards = () => {
  const [billboards, setBillboards] = useState ([])
  
  useEffect( () => {
    axios.get('/api/billboards')
    .then( res => setBillboards(res.data))
    .catch( err => console.log(err))
  }, [])

  const addBillboards = (billboards) =>{
    axios.post('/api/billboards', { billboards} )
    .then(res => setBillboards(...billboards, res.data))
    .catch( err => console.log(err))
  }

return (
<>
<BillboardsForm addBillboards = {addBillboards} />
  <h1>TOP100
  Billboard
  </h1>
  <BillboardsLists
   billboards= {billboards}
  />
    </>
  )
}

export default Billboards ;
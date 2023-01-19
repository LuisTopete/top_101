import { useState, useEffect } from 'react';
import axios from 'axios';
import BillboardForm from './BillboardForm';
import BillboardList from './BillboardList';

const Billboards = () => {
  const [billboards, setBillboards] = useState ([])
  
  useEffect( () => {
    axios.get('/api/billboards')
    .then( res => setBillboards(res.data))
    .catch( err => console.log(err))
  }, [])

  const addBillboards = (billboard) =>{
    axios.post('/api/billboards', { billboard} )
    .then(res => setBillboards([...billboards, res.data]))
    .catch( err => console.log(err))
  }

  const updateBillboards = (id, billboard) => {
  axios.put(`/api/billboards/${id}`,{billboard})
  .then(res => {
    const newupdatedBillboards = billboards.map ( s =>{
      if ( s.id === id ) {
        return res.data
      }
      return s
      })
    setBillboards(newupdatedBillboards)
  })
  .catch( err => console.log(err))
}

const deleteBillboards = (id) => {
  axios.delete(`/api/billboards/${id}`)
  .then(res => {
    setBillboards( billboards.filter( b=> b.id !== id))
  })
  .catch( err => console.log(err))
}
return (
<>
<BillboardForm addBillboards = {addBillboards} />
  <h1>TOP100
  Billboard
  </h1>
  <BillboardList
   billboards={billboards}
   updateBillboards={updateBillboards}
   deleteBillboards={deleteBillboards}
  />
    </>
  )
}

export default Billboards ;
import BillboardsShow from "./BillboardsShow"
const BillboardsLists = ({billboards, updateBillboards, deleteBillboards}) => (
  <>
  { billboards.map( s => 
    <BillboardsShow
    key={s.id}
    {...s}
    updateBillboards={updateBillboards}
    deleteBillboards={deleteBillboards}
    />
    )}
  </>
)

export default BillboardsLists ;
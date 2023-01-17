import BillboardShow from "./BillboardsShow"
const BillboardsLists = ({billboards, updateBillboards, deleteBillboards}) => (
  <>
  { billboards.map( s => 
    <BillboardShow
    key={s.id}
    {...s}
    updateBillboards={updateBillboards}
    deleteBillboards={deleteBillboards}
    />
    )}
  </>
)

export default BillboardsLists ;
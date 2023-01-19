import BillboardShow from "./BillboardsShow"
const BillboardsLists = ({billboards, updateBillboards, deleteBillboards}) => (
  <>
  { billboards.map( b => 
    <BillboardShow
    key={b.id}
    {...b}
    updateBillboards={updateBillboards}
    deleteBillboards={deleteBillboards}
    />
    )}
  </>
)

export default BillboardsLists ;
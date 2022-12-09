import BillboardsShow from "./BillboardsShow"
const BillboardsLists = ({billboards}) => (
  <>
  { billboards.map( s => 
    <BillboardsShow
    key={s.id}
    {...s}
    />
    )}
  </>
)

export default BillboardsLists ;
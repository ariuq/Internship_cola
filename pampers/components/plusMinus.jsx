import AddToCart from "./AddToCart"

const PlusMinus = ({item}) => {
  return (
    <div className="flex w-16 justify-between">
            <AddToCart increasePerClick={-1} product={item} showQty={false} >
                <div  className="minus">-</div>
                     </AddToCart>
                     <AddToCart increasePerClick={1} product={item}>
                      <div className="plus">+</div>
                     </AddToCart>
    </div>
  )
}

export default PlusMinus
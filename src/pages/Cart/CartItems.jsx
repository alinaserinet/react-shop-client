import { useRef } from "react"
import { CartProduct } from "../../components/Products"

function CartItems({items}) {
  const timer = useRef();
  return (
    <div className="cart-items">
      {Object.keys(items).map((id) => (
        <CartProduct
          key={id}
          product={items[id]}
          ref={timer}
        />
      ))}
    </div>
  )
}

export default CartItems
